'use strict';

import { toggleMenu } from './toggleMenu.js';

// Function to close menu
export const closeMenu = (navBtn) => {
	if (navBtn.getAttribute('aria-pressed') === 'true') {
		toggleMenu(navBtn);
	}
};
