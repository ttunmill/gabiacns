// 로그인 폼
const user_id = document.querySelector("#user_id");
const id_fail = document.querySelector(".id_fail");
const submit_btn = document.querySelector("#user_info_from > p > button[type = submit]")
const user_pwd = document.querySelector("#user_pwd")
const pwd_fail = document.querySelector(".pwd_fail");
const user_pwd_chk = document.querySelector("#user_pwd_chk")
const pwd_chk_fail = document.querySelector(".pwd_chk_fail")
submit_btn.addEventListener("click", () => {
    if (user_id.value == "" || user_pwd.value == "" || user_pwd_chk.value == "" ) {

        if(user_id.value == "" && user_pwd.value == "" && user_pwd_chk.value == "") {
            result_id("#db7c34", "영문 또는 숫자 6~16자리로 입력해 주세요.")
            result_pwd("#db7c34", "비밀번호를 입력해 주세요.")
            result_pwd_chk("#db7c34", "비밀번호를 입력해 주세요.")
        } else if (user_id.value != "") {
            result_id("", "")
        } else if (user_pwd != "") {
            result_pwd("", "")
        } else if (user_pwd_chk != "") {

        }
        
    }
})

function result_id(i, j) {
    user_id.style.borderColor = i
    id_fail.innerHTML = j
}
function result_pwd(i, j) {
    user_pwd.style.borderColor = i
    pwd_fail.innerHTML = j
}
function result_pwd_chk(i, j) {
    user_pwd_chk.style.borderColor = i
    pwd_chk_fail.innerHTML = j
}

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

//약관 상세보기 버튼
const toggle_btn = document.querySelectorAll(".txt_toggle_btn a")
const toggle_txt = document.querySelectorAll(".terms_of_service li .agree_txt")
const toggle_span = document.querySelectorAll(".txt_toggle_btn span")
for(var i of toggle_txt) {i.style.height = "0"};
for(var i of toggle_txt) {i.style.padding = "0"};
let flag = false;
toggle_btn.forEach((i, j) => {
    i.addEventListener("click", (e) => {
        flag = !flag
        e.preventDefault();
        if(flag == true) {
            toggle_txt[j].style.height = "200px";
            toggle_txt[j].style.padding = "20px 5%";
            toggle_span[j].style.transform = "rotate(180deg)"
        } else {
            toggle_txt[j].style.height = "0";
            toggle_txt[j].style.padding = "0";
            toggle_span[j].style.transform = "rotate(0deg)"
        }
    })
})