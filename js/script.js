let sign_up = document.querySelector(".sign_up_btn")
let nav_bg  = document.querySelector(".nav_bg")
let sub = document.querySelectorAll(".sub")
let family_site = document.querySelector(".family_site")
let gnb = document.querySelector(".gnb")
let nav = document.querySelector("nav")
let nav_clone = nav.cloneNode(true)
let m_menu = document.querySelector(".m_menu")
m_menu.appendChild(nav_clone)



sign_up.style.display = "none"
family_site.style.display = "none"


// p-navigation
nav_bg.style.height = "0"
nav_bg.style.opacity = "0"
nav_bg.style.transition = "opacity 0.3s"
for(var i of sub) {i.style.height = "0"}
for(var i of sub) {i.style.opacity = "0"}
for(var i of sub) {i.style.transition = "opacity 0.3s"}

nav.addEventListener("mouseover", () => {
    nav_bg.style.height = "200px"
    nav_bg.style.opacity = 1;
    for(var i of sub) {i.style.height = "max-content"}
    for(var i of sub) {i.style.opacity = "1"}
})
nav.addEventListener("mouseout", () => {
    nav_bg.style.height = "0"
    nav_bg.style.opacity = 0;
    for(var i of sub) {i.style.height = "0"}
    for(var i of sub) {i.style.opacity = "0"}
})

// m-navigation
let m_gnb_li = nav_clone.querySelectorAll(".gnb > li")
let m_gnb_sub = nav_clone.querySelectorAll(".gnb > li > .sub")
let m_menu_close = nav_clone.querySelector(".m_menu > a > img")

m_menu_close.src = "./images/close_menu.svg"

nav_clone.style.transform = "translateX(-100%)"
nav_clone.style.transition = "all 0.3s"
m_menu.children[0].addEventListener("click", (e) => {
    e.preventDefault();
    nav_clone.style.left = "70%"
})
m_menu_close.addEventListener("click", (e) => {
    e.preventDefault();
    nav_clone.style.left = "0%"
})
for(var i of m_gnb_sub) {i.style.display = "none"}
m_gnb_li.forEach((i, j) => {
    i.addEventListener("click", (e) => {
        e.preventDefault()
        for(var i of m_gnb_sub) {i.style.display = "none"}
        m_gnb_sub[j].style.display = "block"
    })
});





// swiper plugin
const swiper1 = new Swiper(".header_swiper", {
    autoplay : {delay : 5000},
    loop : true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next", 
        prevEl:".swiper-button-prev"
    },
})
const swiper2 = new Swiper(".sec03_swiper", {
    autoplay : {delay : 5000},
    effect : "cards",
    loop : true,
})

// scrollTrigger plugin
// 
// for(let i of move_up) {
//     ScrollTrigger.create({
//         trigger : i,
//         onEnter : () => {i.classList.add("move_up")}
//     })
// }

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

