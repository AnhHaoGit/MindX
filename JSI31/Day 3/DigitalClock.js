hour = document.getElementById("hour")
minute = document.getElementById("minute")
second = document.getElementById("second")

setInterval(function() {
    let date = new Date()
    hour.innerHTML = `<div>${date.getHours()<10 ? "0"+ date.getHours(): date.getHours()}</div>`
    minute.innerHTML = `<div>${date.getMinutes()<10 ? "0"+ date.getMinutes(): date.getMinutes()}</div>`
    second.innerHTML = `<div>${date.getSeconds()<10 ? "0"+ date.getSeconds(): date.getSeconds()}</div>`
}, 1000)