// scrollTrigger plugin
//for문으로 대응
let ani = gsap.utils.toArray(".ani") 
for(let i of ani) {
    ScrollTrigger.create({
        trigger : i,
        onEnter : () => {i.classList.add("move_up")},
        scrub : true,
    })
}

// scroll top btn
let top_btn = document.querySelector(".scroll_top_btn")
top_btn.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

let last_scroll = 0;
let $top_btn = $(".scroll_top_btn")
$(window).on("scroll", function() {
    let scroll_top = $(this).scrollTop();
    if(scroll_top > last_scroll) {
        $top_btn.css("bottom", "-10%")
    } else {
        $top_btn.css("bottom", "2%")
    }
    last_scroll = scroll_top;
})

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