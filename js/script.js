let sign_up = document.querySelector(".sign_up_btn")
let nav_bg  = document.querySelector(".nav_bg")
let sub = document.querySelectorAll(".sub")
let family_site = document.querySelector(".family_site")
sign_up.style.display = "none"
nav_bg.style.display = "none"
family_site.style.display = "none"
for(var i of sub) {i.style.display = "none"}







// swiper
const swiper1 = new Swiper(".header_swiper", {
    autoplay : {delay : 5000},
    loop : true,
})
const swiper2 = new Swiper(".sec03_swiper", {
    autoplay : {delay : 5000},
    effect : "cards",
    loop : true,
})