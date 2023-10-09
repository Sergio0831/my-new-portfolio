'use strict';

import { animateModal } from '../animations.js';
import { closeModal, openModal } from './formModal.js';
import {
	hideSpinnerAndEnableButton,
	showSpinnerAndDisableButton,
} from './formSubmitButton.js';
import { validateFormOnFocus, validateFormOnSubmit } from './validateForm.js';

const initializeContactForm = () => {
	const contactForm = document.querySelector('.contact-me__form');
	const modal = document.querySelector('.modal');
	const closeModalBtn = document.querySelector('.modal__close');

	// Create and initialize the modal animation timeline
	const modalTimeline = contactForm && animateModal();

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
					openModal(modalTimeline);
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

	// Check if close modal button exist
	if (closeModalBtn) {
		// Attach a 'click' event handler to close modal button and close modal when button is clicked
		closeModalBtn.addEventListener('click', () => {
			closeModal(modalTimeline);
		});
	}

	// Check if close modal exist
	if (modal) {
		// Attach a 'click' event handler and close modal when click outside modal content
		document.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeModal(modalTimeline);
			}
		});

		// Attach 'keydown' event handler to the document and close modal when 'esc' key pressed
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				closeModal(modalTimeline);
			}
		});
	}
};

document.addEventListener('DOMContentLoaded', initializeContactForm);
