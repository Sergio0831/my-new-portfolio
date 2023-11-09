'use strict';

import { S as Swiper } from './swiper/shared/swiper-core.min.mjs';
import Navigation from './swiper/modules/navigation.min.mjs';
import Pagination from './swiper/modules/pagination.min.mjs';
import Keyboard from './swiper/modules/keyboard.min.mjs';
import Scrollbar from './swiper/modules/scrollbar.min.mjs';
import A11y from './swiper/modules/a11y.min.mjs';
import { icons } from './svgIcons/paginationIcons.js';

// Initialize Swiper for the projets slider
export const initializeProjectsSlider = (projectsSlider) => {
	const projectsSliderCurrent = document.querySelector(
		'.projects__slider-current',
	);

	const swiperProjects = new Swiper(projectsSlider, {
		modules: [Navigation, Pagination, Keyboard, Scrollbar, A11y],
		direction: 'vertical',
		loop: false,
		speed: 1000,
		slidesPerView: 'auto',
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
		modules: [Navigation, Pagination, Keyboard, A11y],
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

const initializeSliders = () => {
	const projectsSlider = document.querySelector('.projects__slider');
	const projectSlider = document.querySelector('.project__slider');

	// Check if the projects sliders is exist
	if (projectsSlider) {
		// Initialize Swiper for the projets slider
		initializeProjectsSlider(projectsSlider);
	}

	// Check if the project sliders is exist
	if (projectSlider) {
		// Initialize project slider
		initializeProjectSlider(projectSlider);
	}
};

document.addEventListener('DOMContentLoaded', initializeSliders);
