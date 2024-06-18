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