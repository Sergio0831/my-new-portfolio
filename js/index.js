'use strict';

const themeBtn = document.querySelector('.theme-btn');

const getCurrentTheme = () => {
	let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
	localStorage.getItem('theme')
		? (theme = localStorage.getItem('theme'))
		: null;
	return theme;
};

const loadTheme = (theme) => {
	const root = document.querySelector(':root');
	if (theme === 'light') {
		themeBtn.textContent = 'Dark Mode';
		themeBtn.setAttribute('aria-label', 'Dark Theme');
	} else {
		themeBtn.textContent = 'Light Mode';
		themeBtn.setAttribute('aria-label', 'Light Theme');
	}
	root.setAttribute('color-scheme', `${theme}`);
};

document.addEventListener('DOMContentLoaded', () => {
	themeBtn.addEventListener('click', () => {
		let theme = getCurrentTheme();

		theme === 'dark' ? (theme = 'light') : (theme = 'dark');

		localStorage.setItem('theme', `${theme}`);
		loadTheme(theme);
	});

	loadTheme(getCurrentTheme());
});
