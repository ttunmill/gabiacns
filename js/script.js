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

gsap.to(".circle1", {
    scrollTrigger : ".circle1",
    x : 0,
    delay : 0.2,
    opacity : 1,
    yoyo: true,
})
gsap.to(".circle2", {
    scrollTrigger : ".circle2",
    x : 0,
    delay : 0.2,
    opacity : 1,
    yoyo: true,
})
gsap.to(".circle3", {
    scrollTrigger : ".circle3",
    x : 0,
    delay : 0.2,
    opacity : 1,
    yoyo: true,
})
gsap.to(".circle4", {
    scrollTrigger : ".circle4",
    x : 0,
    delay : 0.2,
    opacity : 1,
    yoyo: true,
})
gsap.to(".circle5", {
    scrollTrigger : ".circle5",
    delay : 0.2,
    opacity : 1,
    yoyo: true,
})