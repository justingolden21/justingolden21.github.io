document.addEventListener('DOMContentLoaded', function () {
	// ==== Sidebar ====

	document.getElementById('menu-btn').addEventListener('click', toggleNav);
	const sidebarLinks = document.querySelectorAll('#sidebar a');
	sidebarLinks.forEach(function (link) {
		link.setAttribute('tabindex', '-1');
	});

	// esc to close sidebar
	document.body.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && navIsOpen) {
			toggleNav();
		}
	});
});

// ==== Sidebar ====

let navIsOpen = false;

function toggleNav() {
	navIsOpen = !navIsOpen;
	if (navIsOpen) {
		openNav();
	} else {
		closeNav();
	}

	const menuBtn = document.getElementById('menu-btn');
	menuBtn.classList.toggle('is-active');
}

function openNav() {
	const sidebar = document.getElementById('sidebar');
	sidebar.style.width = '16rem';
	sidebar.style.borderRight = '0.25rem solid #333';

	const sidebarLinks = document.querySelectorAll('#sidebar a');
	sidebarLinks.forEach(function (link) {
		link.style.display = 'none';
		link.removeAttribute('tabindex');
	});

	const transitionDuration =
		parseFloat(window.getComputedStyle(sidebar).getPropertyValue('transition-duration')) * 1000;
	setTimeout(function () {
		sidebarLinks.forEach(function (link) {
			link.style.display = '';
		});
	}, transitionDuration);
}

function closeNav() {
	const sidebar = document.getElementById('sidebar');
	sidebar.style.width = '0px';
	sidebar.style.borderRight = '';

	const sidebarLinks = document.querySelectorAll('#sidebar a');
	sidebarLinks.forEach(function (link) {
		link.style.display = 'none';
		link.setAttribute('tabindex', '-1');
	});
}

// ==== Utility ====

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
