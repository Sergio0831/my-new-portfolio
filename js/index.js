'use strict';

import { getCurrentTheme, loadTheme } from './theme.js';

// Wait for DOM content fully loaded
document.addEventListener('DOMContentLoaded', () => {
	const themeBtn = document.querySelector('.theme-btn');

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
});
