// Animation function for nav links
export const animateNavLinks = () => {
	const navMenu = document.querySelector('.navigation__nav');
	// Select all navigation items
	const navLinks = document.querySelectorAll('.navigation__item');

	// Create a timeline for the animation with initial settings
	const timeline = gsap.timeline({ paused: true });

	// Define animation properties for the nav links
	timeline.fromTo(
		navLinks,
		{
			opacity: 0,
			y: 50,
			stagger: 0.1,
			ease: 'elastic(1, 0.5)',
			duration: 0.5,
			delay: 1.2,
		},
		{
			opacity: 1,
			y: 0,
			stagger: 0.1,
			ease: 'elastic(1, 0.5)',
			duration: 0.5,
			delay: 1.2,
			onStart: () => {
				navMenu.style.display = 'flex';
			},
			onReverseComplete: () => {
				navMenu.style.display = 'none';
			},
		},
		'-=0.9',
	);

	// Reverse the timeline
	timeline.reverse();

	// Return the timeline
	return timeline;
};

// Animation function for modal
export const animateModal = () => {
	// Select modal
	const modal = document.querySelector('.modal');
	// Select modal content
	const modalContent = document.querySelectorAll('.modal__content');

	// Create a timeline for the animation with initial settings
	const timeline = gsap.timeline({ paused: true });

	if (modal) {
		// Define animation properties for the modal
		timeline.fromTo(
			modal,
			{
				opacity: 0,
				ease: 'easeInOut',
				duration: 0.3,
			},
			{
				opacity: 1,
				ease: 'easeInOut',
				duration: 0.3,
				onStart: () => {
					modal.style.display = 'flex';
				},
				onReverseComplete: () => {
					modal.style.display = 'none';
				},
			},
		);
	}

	if (modalContent) {
		// Define animation properties for the modal content
		timeline.fromTo(
			modalContent,
			{
				opacity: 0,
				y: -100,
				ease: 'elastic(1, 0.5)',
				duration: 0.6,
				delay: 1,
			},
			{
				opacity: 1,
				y: 0,
				ease: 'elastic(1, 0.5)',
				duration: 0.6,
			},
		);
	}

	// Return the timeline
	return timeline;
};
