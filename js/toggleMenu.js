'use strict';

// Function to toggle the navigation menu state
export const toggleMenu = (navBtn) => {
	// Select the navigation button and navigation background
	const navigationBg = document.querySelector('.navigation__bg');

	// Determine if the button is initially pressed
	const isPressed = navBtn.getAttribute('aria-pressed') === 'true';

	// Toggle the 'isPressed' state
	const newState = !isPressed;

	// Update the 'aria-pressed' attribute
	navBtn.setAttribute('aria-pressed', newState);
	// Update the 'aria-label' attribute
	navBtn.setAttribute(
		'aria-label',
		newState ? 'Close Navigation' : 'Open Navigation',
	);
	// Update the 'aria-expanded' attribute
	navigationBg.setAttribute('aria-expanded', newState);

	// Toggle body scroll
	document.body.style.overflow = newState ? 'hidden' : 'auto';
};

// Function to close menu
export const closeMenu = (navBtn) => {
	if (navBtn.getAttribute('aria-pressed') === 'true') {
		toggleMenu(navBtn);
	}
};
