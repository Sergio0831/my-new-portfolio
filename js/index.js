'use strict';

import { animateNavLinks } from './animations.js';
import { getCurrentTheme, loadTheme } from './theme.js';
import { toggleMenu } from './toggleMenu.js';

// Wait for DOM content fully loaded
document.addEventListener('DOMContentLoaded', () => {
	const themeBtn = document.querySelector('.theme-btn');
	const navBtn = document.querySelector('.navigation__btn');
	const footerYear = document.getElementById('footerYear');

	// Define the timeline
	const timeLine = animateNavLinks();

	// Add click event to the navigation button to toggle navigation
	navBtn.addEventListener('click', () => {
		toggleMenu();
		timeLine.reversed(!timeLine.reversed());
	});

	// Add click event to the themeBtn to change theme on button click
	themeBtn.addEventListener('click', () => {
		// get current theme
		let theme = getCurrentTheme();

		// if theme is a dark, set theme to the light and otherwise
		theme === 'dark' ? (theme = 'light') : (theme = 'dark');

		// set current theme to the local storage
		localStorage.setItem('theme', `${theme}`);
		loadTheme(theme);
	});

	// Get current theme
	const theme = getCurrentTheme();
	// Load current theme
	loadTheme(theme);

	// Add current year to the footer copyright
	footerYear.textContent = new Date().getFullYear();
});
