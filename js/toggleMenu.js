export const toggleMenu = () => {
	const navBtn = document.querySelector('.navigation__btn');
	const navigationBg = document.querySelector('.navigation__bg');
	const isPressed = navBtn.getAttribute('aria-pressed');

	if (isPressed === 'true') {
		navBtn.setAttribute('aria-pressed', 'false');
		navBtn.setAttribute('aria-label', 'Open Navigation');
		navigationBg.setAttribute('aria-expanded', 'false');
	} else {
		navBtn.setAttribute('aria-pressed', 'true');
		navBtn.setAttribute('aria-label', 'Close Navigation');
		navigationBg.setAttribute('aria-expanded', 'true');
	}
};
