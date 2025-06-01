var formSingnin = document.querySelector('#singnin')
var formSingnup = document.querySelector('#singnup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
.addEventListener('click', () =>{
    formSingnin.style.left = "25px"
    formSingnup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnSignup')
.addEventListener('click', () =>{
    formSingnin.style.left = "-450px"
    formSingnup.style.left = "25px"
    btnColor.style.left = "110px"
})