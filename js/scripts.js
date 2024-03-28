$(() => {
	// ==== Sidebar ====

	$('#menu-btn').click(toggleNav);
	$('#sidebar a').attr('tabindex', '-1');

	// esc to close sidebar
	document.body.addEventListener('keydown', function (e) {
		if (e.key == 'Escape' && navIsOpen) $('#menu-btn').click();
	});
});

// ==== Sidebar ====

let navIsOpen = false;

function toggleNav() {
	navIsOpen = !navIsOpen;
	if (navIsOpen) openNav();
	else closeNav();

	$('#menu-btn').toggleClass('is-active');
}

function openNav() {
	$('#sidebar').css('width', '16rem');
	$('#sidebar').css('border-right', '0.25rem solid #333');
	$('#sidebar a').css('display', 'none');
	$('#sidebar a').attr('tabindex', '');
	let mils = parseFloat($('#sidebar').css('transition-duration')) * 1000;
	setTimeout(function () {
		$('#sidebar a').css('display', '');
	}, mils);
}

function closeNav() {
	$('#sidebar').css('width', '0px');
	$('#sidebar').css('border-right', '');

	$('#sidebar a').css('display', 'none');
	$('#sidebar a').attr('tabindex', '-1');
}

// ==== Utility ====

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
