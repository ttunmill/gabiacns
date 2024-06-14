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

// window size responsive
window.onload = () => {
    let screen = window.innerWidth;
    if(screen > 960) {
        nav_bg.style.display = "block"
        gnb.style.display = "flex"
    } else {
        nav_bg.style.display = "none"
        gnb.style.display = "none"
    }
}

window.onresize = function(event){
    let innerWidth = window.innerWidth;
    if(innerWidth > 960) {
        nav_bg.style.display = "block"
        gnb.style.display = "flex"
    } else {
        nav_bg.style.display = "none"
        gnb.style.display = "none"
    }
}