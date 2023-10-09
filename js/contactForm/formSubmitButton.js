'use strict';

// Show spinner and disable submit button while form is sending
export const showSpinnerAndDisableButton = (button) => {
	const spinner = document.createElement('span');
	spinner.className = 'spinner';
	button.innerHTML = '';
	button.appendChild(spinner);
	button.setAttribute('disabled', true);
};

// Hide spinner and enable submit button when form has been send
export const hideSpinnerAndEnableButton = (button, buttonText) => {
	const spinner = document.querySelector('.spinner');
	if (spinner) {
		spinner.remove();
	}
	button.innerHTML = buttonText;
	button.removeAttribute('disabled');
};
