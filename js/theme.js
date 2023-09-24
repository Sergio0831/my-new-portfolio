import { moonIcon, sunIcon } from './themeIcons.js';

// Arrow function to get current theme from the local storage
export const getCurrentTheme = () => {
	let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
	// get current theme from local storage
	localStorage.getItem('theme')
		? (theme = localStorage.getItem('theme'))
		: null;
	return theme;
};

// Load current theme
export const loadTheme = (theme) => {
	const themeBtn = document.querySelector('.theme-btn');
	const root = document.querySelector(':root');
	// Change button icon and aria-label, based on what is current theme
	if (theme === 'light') {
		themeBtn.innerHTML = moonIcon;
		themeBtn.setAttribute('aria-label', 'Dark Theme');
	} else {
		themeBtn.innerHTML = sunIcon;
		themeBtn.setAttribute('aria-label', 'Light Theme');
	}
	// Set to the htm theme
	root.setAttribute('color-scheme', `${theme}`);
};
