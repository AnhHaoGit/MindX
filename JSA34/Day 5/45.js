let a = Number(prompt("Nhập vào a:"))
let b = Number(prompt("Nhập vào b:"))
let c = Number(prompt("Nhập vào c:"))
let d = Number(prompt("Nhập vào d:"))
if (a**b>10**9 || c**d>10**9) {
    alert("Nhập lại")
} else {
    console.log((a**b)+(c**d))
}