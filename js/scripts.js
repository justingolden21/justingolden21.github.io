$(() => {
	const color = '#fed600 #91d8f7 #485e88 #faa74a'.split(' ')[random(0, 3)];
	// rand color
	$('.st0').css('fill', color);

	// setTimeout(
	// 	() => $('#profile-img').css('box-shadow', `0.5rem 0px 0px ${color}`),
	// 	4000
	// );

	// make and rotate tags
	// tagCols is for random but even distribution of tags per column
	const TAGS =
		'WebDesign UI UX GraphicDesign LogoDesign Branding Typography HTML CSS JS jQuery Bootstrap Sass Jekyll Svelte AlpineJS TailwindCSS NoSQL Android MobileApps Firebase PWA SEO Writing VideoEditing'.split(
			' '
		);
	let tagCols = [];
	for (let i = 0; i < Math.ceil(TAGS.length / 4); i++) {
		tagCols = tagCols.concat([1, 2, 3, 4]);
	}
	shuffle(tagCols);
	for (let i = 0; i < TAGS.length; i++) {
		// %23 is "#"
		$('#tag-col-' + tagCols[i]).append(
			'<p style="transform:rotate(' +
				random(-5, 5) +
				'deg);"><a href="https://www.google.com/search?q=%23' +
				TAGS[i] +
				'" target="_blank"><i><b> #' +
				TAGS[i] +
				' </b></a></i></p>'
		);
	}

	// link btns
	$('#mail-btn').click(() =>
		window.open('mailto:justingolden@rgbstudios.org', '_blank')
	);
	$('#linkedin-btn').click(() =>
		window.open('https://www.linkedin.com/in/justingolden21/', '_blank')
	);
	$('#github-btn').click(() =>
		window.open('https://github.com/justingolden21/', '_blank')
	);
	$('[data-toggle="tooltip"]').tooltip();

	// animated envelope icon
	$('#mail-btn').mouseover(() =>
		$('#envelope-icon')
			.removeClass('fa-envelope')
			.addClass('fa-envelope-open')
	);
	$('#mail-btn').mouseout(() =>
		$('#envelope-icon')
			.removeClass('fa-envelope-open')
			.addClass('fa-envelope')
	);

	// nametag (randomly appears)
	if (false && Math.random() > 0.95) {
		// yes, seriously
		$('#nametag-css').attr('href', 'css/nametag.css');
	} else {
		$('.nametag-text').css('display', 'none');

		$('#name-heading')
			.css('opacity', 0)
			.hide()
			.slideDown(1000)
			.animate(
				{ opacity: 1 },
				{ queue: true, duration: 2000, easing: 'easeOutQuad' }
			);

		$('.paragraphs').hide().delay(1500).fadeIn(500);

		// using jquery UI for easing function easeOutQuad, can remove this (use "swing" instead) and remove the CDN
	}

	// side menu
	$('#menu-btn').click(toggleNav);
	$('#sidebar a').attr('tabindex', '-1');
});

// side menu

let navIsOpen = false;

function toggleNav() {
	navIsOpen = !navIsOpen;
	if (navIsOpen) openNav();
	else closeNav();

	$('#menu-btn').toggleClass('is-active');
}

function openNav() {
	$('#sidebar').css('width', '16rem');
	$('#sidebar a').css('display', 'none');
	$('#sidebar a').attr('tabindex', '');
	let mils = parseFloat($('#sidebar').css('transition-duration')) * 1000;
	setTimeout(function () {
		$('#sidebar a').css('display', '');
	}, mils);
}

function closeNav() {
	$('#sidebar').css('width', '0px');
	$('#sidebar a').css('display', 'none');
	$('#sidebar a').attr('tabindex', '-1');
}

// utility

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
	arr.sort(() => Math.random() - 0.5);
}
