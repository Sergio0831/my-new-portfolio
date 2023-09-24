export const animateNavLinks = () => {
	const navLinks = document.querySelectorAll('.navigation__item');

	const timeLine = gsap.timeline({ paused: true });

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

	timeLine.reverse();

	return timeLine;
};
