let a = Number(prompt("Nhập vào a:"))
let b = Number(prompt("Nhập vào b:"))
let c = Number(prompt("Nhập vào c:"))
let d = Number(prompt("Nhập vào d:"))
if (a>100 || b>100 || c>100 || d>100 || a<=-100 || b<=-100 || c<=-100 || d<=-100) {
    alert("Nhập lại")
} else {
    console.log((a+b)*(b+c)*(c+d)*(d+a))
}