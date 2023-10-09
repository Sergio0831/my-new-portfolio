import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
import { icons } from './icons.js';

// Initialize Swiper for the projets slider
export const initializeProjectsSlider = (projectsSlider) => {
	const projectsSliderCurrent = document.querySelector(
		'.projects__slider-current',
	);

	const swiperProjects = new Swiper(projectsSlider, {
		direction: 'vertical',
		loop: false,
		speed: 1000,
		slidesPerView: 1,
		spaceBetween: 32,
		grabCursor: true,
		// Enable keyboard navigation
		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true,
		},
		// Slider navigation buttons with arrows
		navigation: {
			nextEl: '.next-slide',
			prevEl: '.prev-slide',
			disabledClass: 'slider-btn-disabled',
		},
		// Slider scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		// Custom pagination with numbers
		pagination: {
			el: '.projects__slider-total',
			type: 'custom',
			// Render total slides
			renderCustom: function (swiper, current, total) {
				return `0${total}`;
			},
		},
		breakpoints: {
			// From 0px and above set slider direction to horizontal and hide scrollbar
			0: {
				direction: 'horizontal',
				scrollbar: {
					enabled: false,
				},
			},
			// From 1060px and above set slider direction to vertical and show scrollbar
			1060: {
				direction: 'vertical',
				scrollbar: {
					enabled: true,
				},
			},
		},
	});

	// Update the current slide number when the slide is changes
	swiperProjects.on('slideChange', () => {
		// Find the index of the current slide
		const slideIndex = swiperProjects.realIndex;
		// Animate the custom pagination current number to a default state
		gsap.to(projectsSliderCurrent, 0.2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeOut,
			// When the animation completes, update the custom pagination current number
			onComplete: () => {
				gsap.to(projectsSliderCurrent, 0.1, {
					force3D: true,
					y: 10,
				});
				// Set the inner HTML of the custom pagination current number to the slide nuimber
				projectsSliderCurrent.innerHTML = `0${slideIndex + 1}`;
			},
		});
		// Animate the custom pagination current number to its final state
		gsap.to(projectsSliderCurrent, 0.2, {
			force3D: true,
			y: 0,
			opacity: 1,
			ease: Power2.easeOut,
			delay: 0.3,
		});
	});
};

// Single project desktop/mobile screenshot slider
export const initializeProjectSlider = (projectSlider) => {
	new Swiper(projectSlider, {
		loop: false,
		speed: 800,
		slidesPerView: 1,
		grabCursor: true,
		keyboard: {
			enabled: true,
		},
		pagination: {
			el: '.project__slider-pagination',
			bulletClass: 'pagination-btn',
			bulletActiveClass: 'pagination-btn__current',
			clickable: true,
			// Render icons pagination
			renderBullet: function (index, className) {
				return `
					<button type="button" class="${className}">
						${icons[index]}
			        </button>
				`;
			},
		},
	});
};
