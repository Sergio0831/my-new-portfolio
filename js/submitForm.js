export const submitForm = async (form) => {
	// Get data from form inputs
	const formData = new FormData(form);

	try {
		const response = await fetch('mail.php', {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();
		console.log(data.status);
		console.log(data.message);
		// const modalMessage = document.querySelector('.modal__message');

		// modalMessage.innerHTML = modalMessageTemplate(data.status, data.message);

		// // Show modal
		// toggleElement(modal);
	} catch (error) {
		// const modalMessage = document.querySelector('.modal__message');
		// modalMessage.innerHTML = modalMessageTemplate(
		// 	'error',
		// 	'An error occurred while sending the email. Please try later.',
		// 	'The message was not sent. Please try again.',
		// );
		// toggleElement(modal);
		console.log(error);
	} finally {
		// // Hide spinner and enable button
		// hideSpinnerAndEnableButton(submitBtn, buttonText);
	}

	// Reset form
	form.reset();
};
