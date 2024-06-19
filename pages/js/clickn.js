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