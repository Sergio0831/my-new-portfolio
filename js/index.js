'use strict';

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
import { animateNavLinks } from './animations.js';
import { getCurrentTheme, loadTheme } from './theme.js';
import { closeMenu, toggleMenu } from './toggleMenu.js';
import { icons } from './icons.js';
import { validateForm, validateFormOnFocus } from './validateForm.js';

// Wait for DOM content fully loaded
document.addEventListener('DOMContentLoaded', () => {
	const themeBtn = document.querySelector('.theme-btn');
	const navBtn = document.querySelector('.navigation__btn');
	const footerYear = document.getElementById('footerYear');
	const projectsSlider = document.querySelector('.projects__slider');
	const projectsSliderCurrent = document.querySelector(
		'.projects__slider-current',
	);
	const projectSlider = document.querySelector('.project__slider');
	const contactForm = document.querySelector('.contact-me__form');

	// Create and initialize the animation timeline
	const timeLine = animateNavLinks();

	// Attach a click event handler to the navigation button toggle the navigation and play/reverse the timeline
	navBtn.addEventListener('click', () => {
		toggleMenu(navBtn);
		timeLine.reversed(!timeLine.reversed());
	});

	// Attach 'keydown' event handler to the document and close navigation menu when 'esc' key pressed
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			closeMenu(navBtn);
			timeLine.reversed(!timeLine.reversed());
		}
	});

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
		contactForm.addEventListener('submit', (e) => {
			e.preventDefault();

			const formData = new FormData(contactForm);
			const formDataObject = Object.fromEntries(formData);

			// Check if form inputs are valid
			if (validateForm(contactForm)) {
				contactForm.reset();
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
});
