'use strict';

import { animateNavLinks } from './animations.js';
import { getCurrentTheme, loadTheme } from './theme.js';
import { toggleMenu } from './toggleMenu.js';

// Wait for DOM content fully loaded
document.addEventListener('DOMContentLoaded', () => {
	const themeBtn = document.querySelector('.theme-btn');
	const navBtn = document.querySelector('.navigation__btn');
	const footerYear = document.getElementById('footerYear');

	// Create and initialize the animation timeline
	const timeLine = animateNavLinks();

	// Attach a click event handler to the navigation button toggle the navigation and play/reverse the timeline
	navBtn.addEventListener('click', () => {
		toggleMenu();
		timeLine.reversed(!timeLine.reversed());
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
