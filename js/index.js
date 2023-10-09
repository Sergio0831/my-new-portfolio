'use strict';

import { animateModal, animateNavLinks } from './animations.js';
import { getCurrentTheme, loadTheme } from './theme.js';
import { closeMenu, toggleMenu } from './toggleMenu.js';
import { validateFormOnSubmit, validateFormOnFocus } from './validateForm.js';
import {
	initializeProjectsSlider,
	initializeProjectSlider,
} from './sliders.js';
import {
	hideSpinnerAndEnableButton,
	showSpinnerAndDisableButton,
} from './formSubmitButton.js';

// Function to initialize
const init = () => {
	const themeBtn = document.querySelector('.theme-btn');
	const navBtn = document.querySelector('.navigation__btn');
	const footerYear = document.getElementById('footerYear');
	const projectsSlider = document.querySelector('.projects__slider');
	const projectSlider = document.querySelector('.project__slider');
	const contactForm = document.querySelector('.contact-me__form');
	const modal = document.querySelector('.modal');
	const closeModalBtn = document.querySelector('.modal__close');

	// Create and initialize the navigation links animation timeline
	const navLinksTimeLine = animateNavLinks();

	// Create and initialize the modal animation timeline
	const modalTimeline = contactForm && animateModal();

	// Function to open modal
	const openModal = () => {
		document.body.style.overflow = 'hidden';
		modalTimeline.play();
	};

	// Function to cLose modal
	const closeModal = () => {
		document.body.style.overflow = 'auto';
		modalTimeline.reverse();
	};

	// Check if the projects sliders is exist
	if (projectsSlider) {
		// Initialize Swiper for the projets slider
		initializeProjectsSlider(projectsSlider);
	}

	// Check if the project sliders is exist
	if (projectSlider) {
		// Initialize project slider
		initializeProjectSlider(projectSlider);
	}

	// Check if contact form excist on the page
	if (contactForm) {
		// Validate contact form on inputs focus and blur
		validateFormOnFocus();

		// Attach 'submit' event handler to the form
		contactForm.addEventListener('submit', async (e) => {
			e.preventDefault();

			// Check if form inputs are valid
			if (validateFormOnSubmit(contactForm)) {
				const formData = new FormData(contactForm);
				const formDataObject = Object.fromEntries(formData);
				const submitBtn = document.getElementById('submitBtn');
				const buttonText = submitBtn.innerText;

				// Disable button and show spinner
				showSpinnerAndDisableButton(submitBtn);

				try {
					const response = await fetch(
						'https://ivcenko-email.onrender.com/send',
						{
							method: 'POST',
							body: JSON.stringify(formDataObject),
							headers: {
								'Content-Type': 'application/json',
							},
						},
					);

					await response.json();

					// Show modal
					openModal();
				} catch (error) {
					console.log(error);
				} finally {
					// Enable button and hide spinner
					hideSpinnerAndEnableButton(submitBtn, buttonText);
					// Reset form
					contactForm.reset();
				}
			}
		});
	}

	// Attach a click event handler to the navigation button toggle the navigation and play/reverse the timeline
	navBtn.addEventListener('click', () => {
		toggleMenu(navBtn);
		navLinksTimeLine.reversed(!navLinksTimeLine.reversed());
	});

	// Attach 'keydown' event handler to the document and close navigation menu when 'esc' key pressed
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			closeMenu(navBtn);
			navLinksTimeLine.reversed(!navLinksTimeLine.reversed());
		}
	});

	// Check if close modal button exist
	if (closeModalBtn) {
		// Attach a 'click' event handler to close modal button and close modal when button is clicked
		closeModalBtn.addEventListener('click', closeModal);
	}

	// Check if close modal exist
	if (modal) {
		// Attach a 'click' event handler and close modal when click outside modal content
		document.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeModal();
			}
		});

		// Attach 'keydown' event handler to the document and close modal when 'esc' key pressed
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				closeModal();
			}
		});
	}

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
