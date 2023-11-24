/*
	Highlights by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

const audio = new Audio();
audio.src = "audio/bgmusic.m4a";
audio.loop = true;

function toggleAudio() {
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
}

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$html = $('html');

	// Breakpoints.
		breakpoints({
			large:   [ '981px',  '1680px' ],
			medium:  [ '737px',  '980px'  ],
			small:   [ '481px',  '736px'  ],
			xsmall:  [ null,     '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile) {

			var $wrapper;

			// Create wrapper.
				$body.wrapInner('<div id="wrapper" />');
				$wrapper = $('#wrapper');

				// Hack: iOS vh bug.
					if (browser.os == 'ios')
						$wrapper
							.css('margin-top', -25)
							.css('padding-bottom', 25);

				// Pass scroll event to window.
					$wrapper.on('scroll', function() {
						$window.trigger('scroll');
					});

			// Scrolly.
				$window.on('load.hl_scrolly', function() {

					$('.scrolly').scrolly({
						speed: 1500,
						parent: $wrapper,
						pollOnce: true
					});

					$window.off('load.hl_scrolly');

				});

			// Enable touch mode.
				$html.addClass('is-touch');

		}
		else {

			// Scrolly.
				$('.scrolly').scrolly({
					speed: 1500
				});

		}

	// Header.
		var $header = $('#header'),
			$headerTitle = $header.find('header'),
			$headerContainer = $header.find('.container');

		// Make title fixed.
			if (!browser.mobile) {

				$window.on('load.hl_headerTitle', function() {

					breakpoints.on('>medium', function() {

						$headerTitle
							.css('position', 'fixed')
							.css('height', 'auto')
							.css('top', '50%')
							.css('left', '0')
							.css('width', '100%')
							.css('margin-top', ($headerTitle.outerHeight() / -2));

					});

					breakpoints.on('<=medium', function() {

						$headerTitle
							.css('position', '')
							.css('height', '')
							.css('top', '')
							.css('left', '')
							.css('width', '')
							.css('margin-top', '');

					});

					$window.off('load.hl_headerTitle');

				});

			}

		// Scrollex.
			breakpoints.on('>small', function() {
				$header.scrollex({
					terminate: function() {

						$headerTitle.css('opacity', '');

					},
					scroll: function(progress) {

						// Fade out title as user scrolls down.
							if (progress > 0.5)
								x = 1 - progress;
							else
								x = progress;

							$headerTitle.css('opacity', Math.max(0, Math.min(1, x * 2)));

					}
				});
			});

			breakpoints.on('<=small', function() {

				$header.unscrollex();

			});

	// Main sections.
		$('.main').each(function() {

			var $this = $(this),
				$primaryImg = $this.find('.image.primary > img'),
				$bg,
				options;

			// No primary image? Bail.
				if ($primaryImg.length == 0)
					return;

			// Create bg and append it to body.
				$bg = $('<div class="main-bg" id="' + $this.attr('id') + '-bg"></div>')
					.css('background-image', (
						'url("assets/css/images/overlay.png"), url("' + $primaryImg.attr('src') + '")'
					))
					.appendTo($body);

			// Scrollex.
				$this.scrollex({
					mode: 'middle',
					delay: 200,
					top: '-10vh',
					bottom: '-10vh',
					init: function() { $bg.removeClass('active'); },
					enter: function() { $bg.addClass('active'); },
					leave: function() { $bg.removeClass('active'); }
				});

		});
		//Make Modal
		document.addEventListener('DOMContentLoaded', function () {
			var openModalBtn = document.getElementById('openModalBtn');
			var closeModalBtn = document.getElementById('closeModalBtn');
			var modal = document.getElementById('myModal');
			var rsvpForm = document.getElementById('rsvpForm');
		  
			openModalBtn.addEventListener('click', function () {
			  modal.style.display = 'block';
			});
		  
			closeModalBtn.addEventListener('click', function () {
			  modal.style.display = 'none';
			});
		  
			window.addEventListener('click', function (event) {
			  if (event.target === modal) {
				modal.style.display = 'none';
			  }
			});
		  
			rsvpForm.addEventListener('submit', function (event) {
			  event.preventDefault();
		  
			  var Nama = document.getElementById('Nama').value;
			  var Kedatangan = document.getElementById('Kedatangan').value;
		  
			  // Make an AJAX request to the PHP script
			  var xhr = new XMLHttpRequest();
			  xhr.open('POST', 'assets/php/main.php', true);
			  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		  
			  xhr.onload = function () {
				if (xhr.status === 200) {
				  console.log(xhr.responseText);
				  // Optionally, display a success message to the user
				} else {
				  console.error('Error:', xhr.status, xhr.statusText);
				  // Optionally, display an error message to the user
				}
		  
				// Close the modal after submitting the form
				modal.style.display = 'none';
			  };
		  
			  // Send the form data to the server
			  xhr.send('Nama=' + encodeURIComponent(Nama) + '&Kedatangan=' + encodeURIComponent(Kedatangan));
			});
		  });
		  
		  document.getElementById('wishesForm').addEventListener('submit', function (event) {
			event.preventDefault(); // Menghentikan aksi default formulir (pindah halaman)
	  
			var name = document.getElementById('name').value;
			var message = document.getElementById('message').value;
	  
			var xhr = new XMLHttpRequest();
			xhr.open('POST', 'assets/php/wish.php', true);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	  
			xhr.onreadystatechange = function () {
			   if (xhr.readyState == 4 && xhr.status == 200) {
				  // Tambahkan logika atau respons yang sesuai di sini
				  console.log(xhr.responseText);
			   }
			};
	  
			xhr.send('name=' + encodeURIComponent(name) + '&message=' + encodeURIComponent(message));
		 });
})(jQuery);