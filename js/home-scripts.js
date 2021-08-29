$(() => {
	// ==== Random Background Color ====

	const color = '#fed600 #91d8f7 #485e88 #faa74a'.split(' ')[random(0, 3)];
	$('.st0').css('fill', color);
	$('.st0').hide().delay(1000).fadeIn(3000);

	// ==== Make and Rotate Tags ====

	const TAGS =
		'WebDesign UI UX GraphicDesign LogoDesign Branding Typography HTML CSS JS jQuery Bootstrap Sass Jekyll Svelte AlpineJS TailwindCSS NoSQL Android MobileApps Firebase PWA SEO Writing VideoEditing'.split(
			' '
		);

	/** tagCols
	 * @description stores column numbers
	 * @purpose for random but even distribution of tags per column
	 * @type {number}
	 */
	let tagCols = [];
	for (let i = 0; i < Math.ceil(TAGS.length / 4); i++) {
		tagCols = tagCols.concat([1, 2, 3, 4]);
	}
	shuffle(tagCols);

	for (let i = 0; i < TAGS.length; i++) {
		// %23 is "#"
		$('#tag-col-' + tagCols[i]).append(
			`<p style="transform:rotate(${random(-5, 5)}deg);">
				<a rel="noopener" href="https://www.google.com/search?q=%23${TAGS[i]}" target="_blank">#${
				TAGS[i]
			}</a>
			</p>`
		);
	}

	// ==== Page Load Animations ====

	// nametag randomly appears. yes... seriously
	if (true && Math.random() > 0.95) {
		$('#nametag-css').attr('href', 'css/nametag.css');

		$('#nametag').css('opacity', 0).hide().slideDown(1000).animate({ opacity: 1 }, 2000);
	} else {
		$('.nametag-text').css('display', 'none');

		$('#name-heading').css('opacity', 0).hide().slideDown(1000).animate({ opacity: 1 }, 2000);
	}

	// other page load animations

	$('.tag-col').css('opacity', 0).delay(2000).animate({ opacity: 1 }, 3000);
	$('.fade-in-text').hide().delay(3000).fadeIn(1000);
	$('#top-btns').hide().delay(2500).slideDown(1000);
	$('#menu-btn').hide().delay(1500).fadeIn(500);
	$('hr').hide().delay(500).fadeIn(1000);

	// typewriter

	let subtitleIdx = 0;
	const subtitleTxt = 'Programmer.  Writer.  Graphic Designer.';
	function typeWriter() {
		if (subtitleIdx < subtitleTxt.length) {
			document.getElementById('subtitle').innerHTML += subtitleTxt.charAt(subtitleIdx);
			subtitleIdx++;
			setTimeout(typeWriter, random(25, 75));
		}
	}
	setTimeout(typeWriter, 1750);
});
