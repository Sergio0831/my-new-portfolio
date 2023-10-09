'use strict';

// Function to open modal
export const openModal = (modalTimeline) => {
	document.body.style.overflow = 'hidden';
	modalTimeline.play();
};

// Function to cLose modal
export const closeModal = (modalTimeline) => {
	document.body.style.overflow = 'auto';
	modalTimeline.reverse();
};
