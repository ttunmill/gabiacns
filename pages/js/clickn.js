// var banner_swiper = new Swiper('.banner_swiper', { 
//     필요한 옵션을 작성합니다.
//     autoplay: true,
//     slidesPerView: 3,
//     effect: 'coverflow',
//     loop: true,
// })

const swiperSlides = document.querySelectorAll('.banner_swiper');

swiperSlides.forEach(function (element, index) {
    element.classList.add("swiper-" + index);
    let swiper = new Swiper(".swiper-" + index, {
    autoplay: {
            delay: 1,
            desableOnInteraction: false,
    },
    speed: 5000,
    loop: true,
    slidesPerView: 4,
    freemode: true
    });
});


// fixed버튼 바텀위치시 고정 아닐시 따라옴
$(function () {
	const cvbtn = $('.scroll_btn');
	const height = 100;

	cvbtn.addClass('hide');

	const scrollEv = function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > height + 400) {
				cvbtn.removeClass('hide');
				cvbtn.show().addClass('show');
			} else {
				cvbtn.removeClass('show');
				cvbtn.addClass('hide');
			}
		});
	}


	window.addEventListener('scroll', scrollEv);

	const cvbtnArea = $('.scroll_btn');

	function checkbtn(element, check = 'above') {
		const viewportHeight = $(window).height();
		const scrolltop = $(window).scrollTop();
		const elementHeight = $(element).height();
		const y = $(element).offset().top;

		if (check == "visible")
			return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));

		if (check == "above")
			return ((y < (viewportHeight + scrolltop)));
	}

	const absolEv = function () {
		const sectionBtnl = $('.section_cvbtnsec');

		if (checkbtn(sectionBtnl)) {
			cvbtn.removeClass('fixed');
			cvbtn.addClass('absol');
		} else {
			cvbtn.removeClass('absol');
			cvbtn.addClass('fixed');
		}
	}

	const heightEv = function () {
		const cvbtnHeight = cvbtn.innerHeight();
		if (window.matchMedia("(max-width: 640px)").matches) {
			$(cvbtnArea).height(cvbtnHeight);
		} else {
			$(cvbtnArea).height(cvbtnHeight);
		}
	}

	window.addEventListener('load', heightEv);
	window.addEventListener('resize', heightEv);
	window.addEventListener('scroll', absolEv);
});