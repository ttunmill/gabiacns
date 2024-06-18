// swiper plugin
const swiper1 = new Swiper(".header_swiper", {
    autoplay : {delay : 5000},
    loop : true,
    pagination: {
        el: /* ".swiper-pagination", */'.header_swiper .swiper-pagination',
        clickable: true,
        type: 'fraction',
    },
    navigation: {
        nextEl:".swiper-button-next", 
        prevEl:".swiper-button-prev"
    },
})
const swiper2 = new Swiper(".sec03_swiper", {
    autoplay : {delay : 5000},
    effect : "cards",
    loop : true,
})