var us = "Nguyễn Anh Hào"
var pass = 'anhhao99'

var usernameInfo = document.querySelector ("#username")
var passwordInfo = document.querySelector ("#password")

var loginInfo = document.querySelector ("#login")
loginInfo.addEventListener("click", function show() {
    if(usernameInfo.value==us && passwordInfo.value==pass){
        alert("Login Successfully")
    } else {
        alert("Try again")
    }
})