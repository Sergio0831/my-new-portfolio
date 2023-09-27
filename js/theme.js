import { moonIcon, sunIcon } from './themeIcons.js';

// Arrow function to determine the current theme on user preferences and local storage
export const getCurrentTheme = () => {
	// Determine the theme based on user preferences (dark or light)
	let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';

	// Get the current theme from local storage, if available
	localStorage.getItem('theme')
		? (theme = localStorage.getItem('theme'))
		: null;
	return theme;
};

// Load the specified theme and update the UI elements accordingly
export const loadTheme = (theme) => {
	const themeBtn = document.querySelector('.theme-btn');
	const root = document.querySelector(':root');
	const logoImg = document.querySelector('.header__logo-img');

	// Update the button's icon, ARIA label and logo image based on the current theme
	if (theme === 'light') {
		themeBtn.innerHTML = moonIcon;
		themeBtn.setAttribute('aria-label', 'Dark Theme');
		themeBtn.setAttribute('aria-checked', 'false');
		logoImg.src = 'images/logo-dark.svg';
	} else {
		themeBtn.innerHTML = sunIcon;
		themeBtn.setAttribute('aria-label', 'Light Theme');
		themeBtn.setAttribute('aria-checked', 'true');
		logoImg.src = 'images/logo-light.svg';
	}
	// Set the 'color-scheme attribute of the 'root' element to the specified theme
	root.setAttribute('color-scheme', `${theme}`);
};
