// Arrow function to toggle the navigation menu state
export const toggleMenu = () => {
	// Select the navigation button and navigation background
	const navBtn = document.querySelector('.navigation__btn');
	const navigationBg = document.querySelector('.navigation__bg');

	// Get the current value of the 'aria-pressed' attribute
	const isPressed = navBtn.getAttribute('aria-pressed');

	// Check if the navigation menu is currently open or closed
	if (isPressed === 'true') {
		// If it's open, set the attributes to indicate it's closed
		navBtn.setAttribute('aria-pressed', 'false');
		navBtn.setAttribute('aria-label', 'Open Navigation');
		navigationBg.setAttribute('aria-expanded', 'false');
	} else {
		// If it's close, set the attributes to indicate it's open
		navBtn.setAttribute('aria-pressed', 'true');
		navBtn.setAttribute('aria-label', 'Close Navigation');
		navigationBg.setAttribute('aria-expanded', 'true');
	}
};
