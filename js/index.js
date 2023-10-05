'use strict';

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
import { animateModal, animateNavLinks } from './animations.js';
import { getCurrentTheme, loadTheme } from './theme.js';
import { closeMenu, toggleMenu } from './toggleMenu.js';
import { icons } from './icons.js';
import { validateFormonSubmit, validateFormOnFocus } from './validateForm.js';
import { submitForm } from './submitForm.js';

// Function to initialize
const init = () => {
	const themeBtn = document.querySelector('.theme-btn');
	const navBtn = document.querySelector('.navigation__btn');
	const footerYear = document.getElementById('footerYear');
	const projectsSlider = document.querySelector('.projects__slider');
	const projectsSliderCurrent = document.querySelector(
		'.projects__slider-current',
	);
	const projectSlider = document.querySelector('.project__slider');
	const contactForm = document.querySelector('.contact-me__form');
	const modal = document.querySelector('.modal');
	const closeModalBtn = document.querySelector('.modal__close');

	// Create and initialize the navigation links animation timeline
	const navLinksTimeLine = animateNavLinks();

	// Create and initialize the modal animation timeline
	const modalTimeline = animateModal();

	// Function to open modal
	const openModal = () => {
		document.body.style.overflow = 'hidden';
		modalTimeline.play();
	};

	// Function to cLose modal
	const closeModal = () => {
		document.body.style.overflow = 'auto';
		modalTimeline.reverse();
	};

	// Initialize Swiper for the projets slider
	const swiperProjects = new Swiper(projectsSlider, {
		direction: 'vertical',
		loop: false,
		speed: 1000,
		slidesPerView: 1,
		spaceBetween: 32,
		grabCursor: true,
		// Enable keyboard navigation
		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true,
		},
		// Slider navigation buttons with arrows
		navigation: {
			nextEl: '.next-slide',
			prevEl: '.prev-slide',
			disabledClass: 'slider-btn-disabled',
		},
		// Slider scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		// Custom pagination with numbers
		pagination: {
			el: '.projects__slider-total',
			type: 'custom',
			// Render total slides
			renderCustom: function (swiper, current, total) {
				return `0${total}`;
			},
		},
		breakpoints: {
			// From 0px and above set slider direction to horizontal and hide scrollbar
			0: {
				direction: 'horizontal',
				scrollbar: {
					enabled: false,
				},
			},
			// From 1060px and above set slider direction to vertical and show scrollbar
			1060: {
				direction: 'vertical',
				scrollbar: {
					enabled: true,
				},
			},
		},
	});

	// Update the current slide number when the slide is changes
	swiperProjects.on('slideChange', () => {
		// Find the index of the current slide
		const slideIndex = swiperProjects.realIndex;
		// Animate the custom pagination current number to a default state
		gsap.to(projectsSliderCurrent, 0.2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeOut,
			// When the animation completes, update the custom pagination current number
			onComplete: () => {
				gsap.to(projectsSliderCurrent, 0.1, {
					force3D: true,
					y: 10,
				});
				// Set the inner HTML of the custom pagination current number to the slide nuimber
				projectsSliderCurrent.innerHTML = `0${slideIndex + 1}`;
			},
		});
		// Animate the custom pagination current number to its final state
		gsap.to(projectsSliderCurrent, 0.2, {
			force3D: true,
			y: 0,
			opacity: 1,
			ease: Power2.easeOut,
			delay: 0.3,
		});
	});

	// Single project desktop/mobile screenshot slider
	const swiperProject = new Swiper(projectSlider, {
		loop: false,
		speed: 800,
		slidesPerView: 1,
		grabCursor: true,
		keyboard: {
			enabled: true,
		},
		pagination: {
			el: '.project__slider-pagination',
			bulletClass: 'pagination-btn',
			bulletActiveClass: 'pagination-btn__current',
			clickable: true,
			// Render icons pagination
			renderBullet: function (index, className) {
				return `
					<button type="button" class="${className}">
						${icons[index]}
			        </button>
				`;
			},
		},
	});

	// Check if contact form excist on the page
	if (contactForm) {
		// Validate contact form on inputs focus and blur
		validateFormOnFocus();

		// Attach 'submit' event handler to the form
		contactForm.addEventListener('submit', async (e) => {
			e.preventDefault();

			// Check if form inputs are valid
			if (validateFormonSubmit(contactForm)) {
				const formData = new FormData(contactForm);
				const submitBtn = document.getElementById('submitBtn');

				// Disable button
				submitBtn.setAttribute('disabled', true);

				try {
					const response = await fetch('mail.php', {
						method: 'POST',
						body: formData,
					});

					const data = await response.json();
					console.log(data.status);
					console.log(data.message);

					// // Show modal
					openModal();
				} catch (error) {
					console.log(error);
				} finally {
					// Enable button
					submitBtn.removeAttribute('disabled');
				}

				// Reset form
				contactForm.reset();
			}
		});
	}

	// Attach a click event handler to the navigation button toggle the navigation and play/reverse the timeline
	navBtn.addEventListener('click', () => {
		toggleMenu(navBtn);
		navLinksTimeLine.reversed(!navLinksTimeLine.reversed());
	});

	// Attach 'keydown' event handler to the document and close navigation menu when 'esc' key pressed
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			closeMenu(navBtn);
			navLinksTimeLine.reversed(!navLinksTimeLine.reversed());
		}
	});

	// Check if close modal button exist
	if (closeModalBtn) {
		// Attach a 'click' event handler to close modal button and close modal when button is clicked
		closeModalBtn.addEventListener('click', closeModal);
	}

	// Check if close modal exist
	if (modal) {
		// Attach a 'click' event handler and close modal when click outside modal content
		document.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeModal();
			}
		});

		// Attach 'keydown' event handler to the document and close modal when 'esc' key pressed
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				closeModal();
			}
		});
	}

	// Attach a click event handler to the themeBtn to change a theme on button click
	themeBtn.addEventListener('click', () => {
		// Get current theme
		let theme = getCurrentTheme();

		// Toggle theme between dark and light
		theme === 'dark' ? (theme = 'light') : (theme = 'dark');

		// Store the updated theme in the local storage
		localStorage.setItem('theme', `${theme}`);

		// Load an aply the updated theme
		loadTheme(theme);
	});

	// Get the current theme
	const theme = getCurrentTheme();
	// Load the current theme
	loadTheme(theme);

	// Add the current year to the footer copyright
	footerYear.textContent = new Date().getFullYear();
};

// Wait for DOM content fully loaded
document.addEventListener('DOMContentLoaded', init);
