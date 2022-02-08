let form = document.getElementById("form")
let email = document.getElementById("email")
let errorMsg = document.getElementById("error-msg")

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!emailRegex.test(email.value)|| (email.value=="")) {
        email.style.outline = "2px solid red"
        errorMsg.style.visibility = "visible"
        
    }
    else {
        email.style.outline = "2px solid green"
        errorMsg.style.visibility = "hidden"
    }
})