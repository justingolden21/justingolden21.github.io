document.addEventListener('DOMContentLoaded', function () {
	// ==== Random Background Color ====

	const color = '#fed600 #91d8f7 #485e88 #faa74a'.split(' ')[random(0, 3)];
	document.querySelector('.st0').style.fill = color;
	setTimeout(() => {
		document.querySelector('.st0').classList.add('show');
	}, 1000);

	// ==== Make and Rotate Tags ====

	const TAGS =
		'WebDesign UI UX GraphicDesign LogoDesign Branding Typography HTML CSS JS jQuery Bootstrap Sass Jekyll Svelte SvelteKit AlpineJS React Vue TailwindCSS MySQL NoSQL Android MobileApps Firebase Supabase PWA SEO Writing VideoEditing WordPress GoogleCharts Photoshop Illustrator PremierePro Figma'.split(
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
		document.getElementById(
			'tag-col-' + tagCols[i]
		).innerHTML += `<p style="margin-bottom: 1rem; transform:rotate(${random(-5, 5)}deg);">
				<a class="a" rel="noopener" href="https://www.google.com/search?q=%23${TAGS[i]}" target="_blank">#${
			TAGS[i]
		}</a></p>`;
	}

	// ==== Page Load Animations ====

	// nametag randomly appears
	if (true && Math.random() > 0.95) {
		document.getElementById('nametag-css').setAttribute('href', 'css/nametag.css');
	} else {
		document.querySelector('.nametag-text').style.display = 'none';
	}

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
