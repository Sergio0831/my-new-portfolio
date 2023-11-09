'use strict';

import { animateNavLinks } from './animations.js';
import tabTrappingKey from './focusTrap/index.js';
import { getCurrentTheme, loadTheme } from './theme.js';
import { toggleMenu } from './navMenu/toggleMenu.js';
import { closeMenu } from './navMenu/closeMenu.js';
import { logoIcon } from './svgIcons/logoIcon.js';

// Function to initialize
const init = () => {
	const cursor = document.getElementById('cursor');
	const linksButtons = document.querySelectorAll('a, button');
	const logo = document.getElementById('logo');
	const navigation = document.querySelector('.navigation');
	const themeBtn = document.querySelector('.theme-btn');
	const navBtn = document.querySelector('.navigation__btn');
	const footerYear = document.getElementById('footerYear');

	// Custom cursor
	let mouseX = 0,
		mouseY = 0,
		posX = 0,
		posY = 0;

	const mouseCoords = (e) => {
		mouseX = e.pageX;
		mouseY = e.pageY;
	};

	gsap.to({}, 0.01, {
		repeat: -1,
		onRepeat: () => {
			posX += (mouseX - posX) / 6;
			posY += (mouseY - posY) / 6;
			gsap.set(cursor, {
				css: {
					left: posX,
					top: posY,
				},
			});
		},
	});

	linksButtons.forEach((el) => {
		el.addEventListener('mouseover', () => {
			if (
				(window.getComputedStyle(el).backgroundColor === 'rgb(48, 90, 173)') |
				(window.getComputedStyle(el).backgroundColor === 'rgb(86, 122, 228)')
			) {
				cursor.style.borderColor = 'var(--clr-secondary)';
			} else {
				cursor.style.borderColor = 'var(--theme-btn)';
			}

			cursor.classList.add('active');
		});
		el.addEventListener('mouseout', () => {
			cursor.classList.remove('active');
		});
	});

	// Insert logo svg
	logo.insertAdjacentHTML('beforeend', logoIcon);

	// Create and initialize the navigation links animation timeline
	const navLinksTimeLine = animateNavLinks();

	// Define a named function for the 'keydown' event handler
	const handleEventHandler = (e) => {
		tabTrappingKey(e, navigation);
	};

	// Attach a 'mousemove' event listener to the body to get mouse position
	document.body.addEventListener('mousemove', (e) => {
		cursor.classList.remove('hidden');
		mouseCoords(e);
	});

	// Attach a 'mouseout' event listener to the body to hide custom cursor
	document.body.addEventListener('mouseout', (e) => {
		cursor.classList.add('hidden');
	});

	// Attach a click event handler to the navigation button toggle the navigation and play/reverse the timeline
	navBtn.addEventListener('click', () => {
		toggleMenu(navBtn);

		// Implement focus trap
		if (navBtn.getAttribute('aria-pressed') === 'true') {
			// If navigation button 'aria-pressed' is true, add the focus trap
			document.addEventListener('keydown', handleEventHandler);
		} else {
			// If navigation button 'aria-pressed' is false, remove the focus trap
			document.removeEventListener('keydown', handleEventHandler);
		}

		navLinksTimeLine.reversed(!navLinksTimeLine.reversed());
	});

	// Attach 'keydown' event handler to the document and close navigation menu when 'esc' key pressed
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			closeMenu(navBtn);

			// Remove the focus trap
			document.removeEventListener('keydown', handleEventHandler);

			navLinksTimeLine.reversed(!navLinksTimeLine.reversed());
		}
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
};

// Wait for DOM content fully loaded
document.addEventListener('DOMContentLoaded', init);
