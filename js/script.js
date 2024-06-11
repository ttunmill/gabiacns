let sign_up = document.querySelector(".sign_up_btn")
let nav_bg  = document.querySelector(".nav_bg")
let sub = document.querySelectorAll(".sub")
let family_site = document.querySelector(".family_site")
let gnb = document.querySelector(".gnb")
let nav = document.querySelector("nav")
let nav_clone = nav.cloneNode(true)
sign_up.style.display = "none"
family_site.style.display = "none"

console.log(nav_clone)

// navigation
nav_bg.style.opacity = "0"
nav_bg.style.transition = "all 0.3s"
for(var i of sub) {i.style.opacity = "0"}
for(var i of sub) {i.style.transition = "all 0.3s"}

nav.addEventListener("mouseover", () => {
    nav_bg.style.opacity = 1;
    for(var i of sub) {i.style.opacity = "1"}
})
nav.addEventListener("mouseout", () => {
    nav_bg.style.opacity = 0;
    for(var i of sub) {i.style.opacity = "0"}
})






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