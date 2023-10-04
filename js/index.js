'use strict';

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
import { animateNavLinks } from './animations.js';
import { getCurrentTheme, loadTheme } from './theme.js';
import { closeMenu, toggleMenu } from './toggleMenu.js';

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

	const icons = [
		`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50">
			<path fill="currentColor" fill-rule="evenodd"
			d="M40.521 35.7H27.128v5.357h4.822a1.607 1.607 0 110 3.214H19.092a1.607 1.607 0 110-3.214h4.822V35.7H10.52a3.772 3.772 0 01-3.75-3.75V10.52a3.771 3.771 0 013.75-3.75h30a3.771 3.771 0 013.75 3.75V31.95a3.771 3.771 0 01-3.75 3.75zm0-3.215h-30a.536.536 0 01-.536-.535V10.52a.536.536 0 01.536-.536h30a.536.536 0 01.536.536V31.95a.536.536 0 01-.536.535z"
			clip-rule="evenodd" />
		</svg>`,
		`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50">
			<path fill="currentColor" fill-rule="evenodd"
			d="M14.904 10.577a1.442 1.442 0 011.442-1.442h17.308a1.442 1.442 0 011.442 1.442v28.846a1.442 1.442 0 01-1.442 1.442H16.346a1.442 1.442 0 01-1.442-1.442V10.577zm1.442-4.327a4.327 4.327 0 00-4.327 4.327v28.846a4.327 4.327 0 004.327 4.327h17.308a4.327 4.327 0 004.327-4.327V10.577a4.327 4.327 0 00-4.327-4.327H16.346zm4.327 30.721a1.01 1.01 0 100 2.02h8.654a1.01 1.01 0 000-2.02h-8.654z"
			clip-rule="evenodd" />
		</svg>`,
	];

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
