// Animation function for nav links
export const animateNavLinks = () => {
	// Select all navigation items
	const navLinks = document.querySelectorAll('.navigation__item');

	// Create a timeline for the animation with initial settings
	const timeLine = gsap.timeline({ paused: true });

	// Define animation properties for the nav links
	timeLine.from(
		navLinks,
		{
			opacity: 0,
			y: 50,
			stagger: 0.1,
			ease: 'elastic(1, 0.5)',
			duration: 0.5,
			delay: 1.2,
		},
		'-=0.9',
	);

	// Reverse the timeline
	timeLine.reverse();

	// Return the timeline
	return timeLine;
};
