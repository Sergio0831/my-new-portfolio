'use strict';

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
import { animateNavLinks } from './animations.js';
import { getCurrentTheme, loadTheme } from './theme.js';
import { toggleMenu } from './toggleMenu.js';

// Wait for DOM content fully loaded
document.addEventListener('DOMContentLoaded', () => {
	const themeBtn = document.querySelector('.theme-btn');
	const navBtn = document.querySelector('.navigation__btn');
	const footerYear = document.getElementById('footerYear');
	const projectsSlider = document.querySelector('.projects__slider');
	const projectsSliderCurrent = document.querySelector(
		'.projects__slider-current',
	);

	// Create and initialize the animation timeline
	const timeLine = animateNavLinks();

	// Attach a click event handler to the navigation button toggle the navigation and play/reverse the timeline
	navBtn.addEventListener('click', () => {
		toggleMenu();
		timeLine.reversed(!timeLine.reversed());
	});

	// Initialize Swiper for the projets slider
	const swiperProjects = new Swiper(projectsSlider, {
		direction: 'vertical',
		loop: false,
		speed: 1000,
		// mousewheel: true,
		keyboard: {
			enabled: true,
			onlyInViewport: false,
			pageUpDown: true,
		},
		grabCursor: true,
		navigation: {
			nextEl: '.next-slide',
			prevEl: '.prev-slide',
			disabledClass: 'slider-btn-disabled',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
			// horizontalClass: 'swiper-scrollbar-horizontal',
			// verticalClass: 'swiper-scrollbar-vertical',
		},
		pagination: {
			el: '.projects__slider-total',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				return `0${total}`;
			},
		},
	});

	// Update the current slide number when the slide is changes
	swiperProjects.on('slideChange', () => {
		const slideIndex = swiperProjects.realIndex;
		gsap.to(projectsSliderCurrent, 0.2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeOut,
			onComplete: () => {
				gsap.to(projectsSliderCurrent, 0.1, {
					force3D: true,
					y: 10,
				});
				projectsSliderCurrent.innerHTML = `0${slideIndex + 1}`;
			},
		});
		gsap.to(projectsSliderCurrent, 0.2, {
			force3D: true,
			y: 0,
			opacity: 1,
			ease: Power2.easeOut,
			delay: 0.3,
		});
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
