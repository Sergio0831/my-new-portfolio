// Function to validate email input
const isValidEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

// Function to display error message and add 'invalid' class to the input
const displayError = (input, errorMessage) => {
	const errorSpan = input.nextElementSibling.querySelector('.error-message');
	input.classList.add('invalid');
	errorSpan.textContent = errorMessage;
};

// Function to remove error message and 'invalid' class from the input
const removeError = (input) => {
	const errorSpan = input.nextElementSibling.querySelector('.error-message');
	input.classList.remove('invalid');
	errorSpan.textContent = '';
};

// Function to validate form inputs
export const validateForm = (form) => {
	const formInputs = form.querySelectorAll('.contact-me__form-input');
	let valid = true;

	formInputs.forEach((input) => {
		if (input.value.trim() === '') {
			valid = false;
			displayError(input, 'Required');
		} else {
			removeError(input);
		}

		if (input.type === 'email') {
			if (input.value.trim() === '') {
				valid = false;
				displayError(input, 'Required');
			} else if (!isValidEmail(input.value)) {
				valid = false;
				displayError(input, 'Wrong format');
			} else {
				removeError(input);
			}
		}
	});

	return valid;
};

export const validateFormOnFocus = () => {
	const contactForm = document.querySelector('.contact-me__form');
	const formInputs = contactForm.querySelectorAll('.contact-me__form-input');

	// Loop through all form inputs
	formInputs.forEach((input) => {
		// Attach 'focus' event handler to the input
		input.addEventListener('focus', () => {
			// Display error message if input left empty
			if (input.classList.contains('invalid')) {
				removeError(input);
			}
		});

		// Attach 'blur' event handler to the input
		input.addEventListener('blur', () => {
			// Display error message if input left empty
			if (input.value.trim() === '') {
				displayError(input, 'Required');
			}

			if (input.type === 'email') {
				if (input.value.trim() === '') {
					displayError(input, 'Required');
				} else if (!isValidEmail(input.value)) {
					displayError(input, 'Wrong format');
				}
			}
		});
	});
};
