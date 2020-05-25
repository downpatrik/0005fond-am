"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {
				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});

				_this.menuMobile.classList.toggle("active");

				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},
	closeMenu: function closeMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");
		});

		_this.menuMobile.classList.remove("active");

		_this.body.classList.remove("fixed");
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		_this.toggleMenu();

		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);

				_this.closeMenu();
			});
		});

		document.addEventListener('mouseup', function (event) {
			var container = event.target.closest(".menu-mobile--js.active"); // (1)

			if (!container) {
				_this.closeMenu();
			}
		});
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

};

function eventHandler() {
	var _, _Swiper;

	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/08.jpg);"></div>')
	// /добавляет подложку для pixel perfect
	// /закрыть/открыть мобильное меню

	function heightses() {
		var w = $(window).width(); // скрывает моб меню

		var topH = $("header ").innerHeight();
		$(window).scroll(function () {
			if ($(window).scrollTop() > 150) {
				$('.top-line  ').addClass('fixed');
			} else {
				$('.top-line  ').removeClass('fixed');
			} // if (document.body.scrollTop === 0) $('.top-line').addClass('fixed-mob');
			// else $('.top-line').removeClass('fixed-mob');

		});
		var lastScrollTop = 0;
		$(window).scroll(function (event) {
			var st = $(this).scrollTop();

			if (st > lastScrollTop) {
				$('.top-line  ').removeClass('fixed-mob');
			} else {
				$('.top-line  ').addClass('fixed-mob');
			}

			lastScrollTop = st;
		}); // конец добавил
		// 	if (window.matchMedia("(min-width: 992px)").matches) {
		// 		JSCCommon.closeMenu();
		// 	}
	}

	$(window).resize(function () {
		heightses();
	});
	heightses(); // листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 80;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var mySwiper = new Swiper('.slider-auto-js', {
		speed: 400,
		// loop: true,
		loopedSlides: 4,
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			576: {
				spaceBetween: 20,
				slidesPerView: 'auto',
				watchOverflow: true,
				freeMode: true,
				freeModeMomentum: true,
				loop: false // slidesPerView: 4,
				// spaceBetween: 40

			},
			1200: (_ = {
				spaceBetween: 30,
				slidesPerView: 'auto'
			}, _defineProperty(_, "slidesPerView", 'auto'), _defineProperty(_, "watchOverflow", true), _defineProperty(_, "freeMode", true), _defineProperty(_, "freeModeMomentum", true), _defineProperty(_, "loop", false), _)
		}
	});
	var mySwiperMob = new Swiper('.slider-auto-mob-js', (_Swiper = {
		speed: 400,
		loop: true,
		loopedSlides: 4,
		spaceBetween: 20,
		slidesPerView: 'auto',
		watchOverflow: true,
		freeMode: true,
		freeModeMomentum: true
	}, _defineProperty(_Swiper, "loop", false), _defineProperty(_Swiper, "breakpoints", {
		576: {
			spaceBetween: 30
		}
	}), _Swiper));
	var mySwiper2 = new Swiper('.s-project__slider--js', {
		// effect: 'coverflow',
		// grabCursor: true,
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		loopedSlides: 6,
		breakpoints: {
			// 576: {
			// },
			576: {
				slidesPerView: 2
			},
			991: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
				slidesOffsetBefore: -80,
				slidesOffsetAfter: -80,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			}
		}
	});
	var mySwiper3 = new Swiper('.s-project__slider--3-js', {
		slidesPerView: 'auto',
		watchOverflow: true,
		freeMode: true,
		freeModeMomentum: true,
		spaceBetween: 20,
		loopedSlides: 6,
		breakpoints: {
			// 576: {
			// 	slidesPerView: 1,
			// },
			991: {
				loop: true,
				watchOverflow: false,
				freeMode: false,
				freeModeMomentum: false,
				slidesPerView: 2
			},
			1200: {
				loop: true,
				watchOverflow: false,
				freeMode: false,
				freeModeMomentum: false,
				slidesPerView: 2,
				spaceBetween: 30,
				slidesOffsetBefore: -80,
				slidesOffsetAfter: -80,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			}
		}
	});
	$(".section").each(function () {
		var mySwiper4 = new Swiper($(this).find('.slider-js'), {
			speed: 400,
			loop: true,
			loopedSlides: 4,
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: $(this).find('.swiper-button-next'),
				prevEl: $(this).find('.swiper-button-prev')
			}
		});
	});
	var mySwiper5 = new Swiper('.s-news__slider--js', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		watchOverflow: true,
		freeMode: true,
		freeModeMomentum: true,
		breakpoints: {
			576: {
				watchOverflow: false,
				freeMode: false,
				freeModeMomentum: false,
				slidesPerView: 2
			}
		}
	});
	$(".project-item").hover(function () {
		$(this).find(".project-item__btn-wrap").slideToggle(150);
	});
	$(".custom-select").chosen({
		html_template: '<span class="option-row"><span class="option-img-wrap"><img  class="{class_name}" src="{url}" /></span><span class="option-text">{text}</span></span> '
	});
	$(".s-continue__col--map").click(function () {
		$(".info-block").show();
	});
	$(".info-block-close").click(function () {
		$(".info-block").toggle();
	}); // $('.custom-select').select2({
	// 	theme: 'bootstrap4',
	// });
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}