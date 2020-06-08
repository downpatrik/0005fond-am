const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	btnToggleMenuMobileInner: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--inner-js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileSub: [].slice.call(document.querySelectorAll(".menu-mobile-sub--js")),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {

				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});
				_this.menuMobile.classList.toggle("active");
				_this.menuMobileSub.forEach(function (element) {
					element.classList.remove("active");
				});

				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},
	
 


	closeMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");

		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");
		_this.menuMobileSub.forEach(function (element) {
			element.classList.remove("active");
		});
	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;

		_this.toggleMenu();
		// _this.menuMobileLink.forEach(function (element) {
		// 	element.addEventListener('click', function (e) {
		// 		console.log(element);
		// 		_this.closeMenu();

		// 	});
		// })
		document.addEventListener('mouseup', function (event) {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			if (!container) {
				_this.closeMenu();

			}
		});
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/about.jpg);"></div>')
	// /добавляет подложку для pixel perfect



	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// скрывает моб меню

		const topH = $("header ").innerHeight();

		// $(window).scroll(function () {
		// 	if ($(window).scrollTop() > 150) {
		// 		$('.top-line  ').addClass('fixed');
		// 	} else {
		// 		$('.top-line  ').removeClass('fixed');
		// 	}

		// 	// if (document.body.scrollTop === 0) $('.top-line').addClass('fixed-mob');
		// 	// else $('.top-line').removeClass('fixed-mob');
		// });
		var lastScrollTop = 0;
		if ($("div").is(".top-line-sub")) {

			$('.header').height($('.top-line').innerHeight())
		}

		$(window).scroll(function (event) {
			var st = $(this).scrollTop();
			if (st > lastScrollTop) {
				$('.top-line  ').addClass('fixed');
			} else {
				$('.top-line  ').removeClass('fixed');
			}
			lastScrollTop = st;
		});
		$(window).scroll(function (event) {
			var st = $(this).scrollTop();
			if (st > 0) {
				$('.top-line  ').addClass('fixed-ready');
			} else {
				$('.top-line  ').removeClass('fixed-ready');
			} 
		});

		$(window).scroll(function (event) {
			var st = $(this).scrollTop();
			if (st == 0) {
				$('.top-line  ').removeClass('fixed ');
			}
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
		});
		// конец добавил
		// 	if (window.matchMedia("(min-width: 992px)").matches) {
		// 		JSCCommon.closeMenu();
		// 	}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top - 80;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	let mySwiperC = new Swiper('.slider-auto-js', {
		speed: 400,
		// loop: true,
		loopedSlides: 4,
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.s-cards .swiper-button-next',
			prevEl: '.s-cards .swiper-button-prev',
		}, 
		breakpoints: {
			576: {
				spaceBetween: 20,
				slidesPerView: 'auto',
				watchOverflow: true,
				freeMode: true,
				freeModeMomentum: true,
				loop: false,

				// slidesPerView: 4,
				// spaceBetween: 40

			},

			1200: {
				spaceBetween: 30,
				slidesPerView: 'auto',
				slidesPerView: 'auto',
				watchOverflow: true,
				freeMode: true,
				freeModeMomentum: true,
				// slidesPerView: 4,
				// spaceBetween: 40
				loop: false,
				
			},

		}
	});
	let mySwiperMob = new Swiper('.slider-auto-mob-js', {
		speed: 400,
		loop: true,
		loopedSlides: 4,
		spaceBetween: 20,
		slidesPerView: 'auto',
		watchOverflow: true,
		freeMode: true,
		freeModeMomentum: true,
		loop: false,
		navigation: {
			nextEl: $(this).find('.swiper-button-next'),
			prevEl: $(this).find('.swiper-button-prev'),
		},
		breakpoints: {
			576: {
				watchOverflow: true,
				spaceBetween: 30,
			},
		}
	});

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
				slidesPerView: 2,

			},
			991: {
				slidesPerView: 3,

			},

			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
				slidesOffsetBefore: -80,
				slidesOffsetAfter: -80,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},

		}
	});
	var mySwiper3 = new Swiper('.s-project__slider--3-js', {
		slidesPerView: 'auto',
		watchOverflow: true,
		freeMode: true,
		freeModeMomentum: true,
		spaceBetween: 20,
		loopedSlides: 6,
		loop: false,
		breakpoints: {
			576: {
				// slidesPerView: 1,

				loop: true,
			},

			991: {
				loop: true,
				watchOverflow: false,
				freeMode: false,
				freeModeMomentum: false,
				slidesPerView: 2,

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
					prevEl: '.swiper-button-prev',
				},
			},

		}
	});
	
	var mySwiperMob2222 = new Swiper('.project-lg__slider--mob-js', {
		slidesPerView: 'auto',
		// loop: true,
		speed: 400,
		spaceBetween: 20,
		loopedSlides: 4,
		watchOverflow: true,
		freeMode: true,
		// freeModeMomentum: true,
	});


	$(".section").each(function () {

		let mySwiperRew = new Swiper($(this).find('.slider-rew-js'), {
			speed: 400,
			loop: true,
			loopedSlides: 4,
			slidesPerView: 'auto',
			spaceBetween: 20,
			watchOverflow: true,
			freeMode: true,
			freeModeMomentum: true,
			navigation: {
				nextEl: $(this).find('.swiper-button-next'),
				prevEl: $(this).find('.swiper-button-prev'),
			},
			breakpoints: {
				992: {
					
					slidesPerView: 3,
					watchOverflow: false,
					freeMode: false,
					freeModeMomentum: false, 
				}
			}
		});
 
	
		let mySwiper4 = new Swiper($(this).find('.slider-js'), {
			speed: 400,
			loop: true,
			loopedSlides: 4,
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: $(this).find('.swiper-button-next'),
				prevEl: $(this).find('.swiper-button-prev'),
			},
		});
	})

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
				slidesPerView: 2,

			}
		}
	});

	$(".project-item").hover(function () {
		$(this).find(".project-item__hidden").slideToggle(150)
	})
 

	var headerSwiper3 = new Swiper('.header-block__slider--js', {
		slidesPerView: 1,
		watchOverflow: true, 
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: '.header-block__swiper-pagination',
			type: 'bullets',
			clickable: true
		},
 
	});




	var mySwiperBody = new Swiper('.s-project-body__slider--js', {
		slidesPerView: 1,
		watchOverflow: true,
		 
		spaceBetween: 20,
		loopedSlides: 6,
		loop: true,
		breakpoints: {
		 
			991: {
		 
				slidesPerView: 2,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '">' + (index + 1) + '</span>';
					},
				},
			},


			1200: {
			 
				slidesPerView: 3,
				spaceBetween: 30, 
			},

		},
		
	});



	$(".custom-select").chosen({
		html_template: '<span class="option-row"><span class="option-img-wrap"><img  class="{class_name}" src="{url}" /></span><span class="option-text">{text}</span></span> '
	});

	$(".s-continue__col--map").click(function () {
		$(".info-block").show();
	})
	$(".info-block-close").click(function () {
		$(".info-block").toggle();
	})
	// $('.custom-select').select2({
	// 	theme: 'bootstrap4',
	// });

	$(".nav__item--has-children-js").each(function () {
		$(this).append('<div class="toggle-l"></div>');
	})

 

	$(".nav__item--has-children-js   ").on('click', '.toggle-l', function () {
	 
		$(this).prev('.menu-mobile-sub--js').addClass('active');
		// return false;
	})
	$(".toggle-menu-mobile--inner-js").click(function () {
		$(this).parents('.menu-mobile-sub--js.active').removeClass('active');
	})

	// боковое меню


	// Cache selectors
	var lastId,
		topMenu = $(" .s-about__nav"),
		topMenuHeight =  0,
		// topMenuHeight = topMenu.outerHeight()+15,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function () {
			var item = $($(this).attr("href"));
			if (item.length) { return item; }
		});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function (e) {
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 1100);
		e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function () {
		// Get container scroll position
		var fromTop = $(this).scrollTop() + topMenuHeight;

		// Get id of current scroll item
		var cur = scrollItems.map(function () {
			if ($(this).offset().top < fromTop)
				return this;
		});
		// Get the id of the current element
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
				.removeClass("active").parent()
				.end().filter("[href='#" + id + "']").addClass("active");
		}
	});


	// $(".sticky-js").data("margin-top",'200')

	var sticky = new Sticky('.sticky-js');

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}