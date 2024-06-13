// 회원정보
// 회원유형 버튼
const btn = document.querySelectorAll(".info_cate button")
// 개인, 기업 입력창
const indi = document.querySelector(".individual_chk")
const enter = document.querySelector(".enterprise_chk")
indi.style.display = "none"
enter.style.display = "none"

btn[0].addEventListener("click", () => {
    btn[1].style.backgroundColor = "#fff"
    btn[1].style.color = "#000"
    btn[1].style.border = "1px solid #000"
    btn[0].style.backgroundColor = "#3090d6"
    btn[0].style.color = "#fff"
    btn[0].style.border = "none"
    enter.style.display = "none"
    indi.style.display = "block"
})
btn[1].addEventListener("click", () => {
    btn[0].style.backgroundColor = "#fff"
    btn[0].style.color = "#000"
    btn[0].style.border = "1px solid #000"
    btn[1].style.backgroundColor = "#3090d6"
    btn[1].style.color = "#fff"
    btn[1].style.border = "none"
    enter.style.display = "block"
    indi.style.display = "none"
})