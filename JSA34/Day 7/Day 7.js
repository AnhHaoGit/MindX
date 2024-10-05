// function printResult() {
//     console.log(1)
//     console.log(2)
//     console.log(3)
//     console.log(4)
//     console.log(5)
// }
// printResult ()
// printResult ()
// printResult ()
// printResult ()

// function printName(name) {
//     console.log("Xin chào " + name)
// }
// printName("Hào")

// function tinhTong(a,b) {
//     console.log (a+b)
// }
// tinhTong(3,4)
// tinhTong(5,3)
// tinhTong(1,4)

// function tinhHieu(a,b) {
//     return a-b
// }
// console.log("Kết quả phép tính hiệu là: " + tinhHieu(10,3))

// function Min(a,b,c) {
//     let min=a
//     if (b<min) min=b
//     if (c<min) min=c
//     return min
// }
// console.log ("Số nhỏ nhất là: " + Min(10,4,6))
let button1 = document.querySelector ("#one")
button1.addEventListener("click", function changeColor() {
    document.body.style.backgroundColor = "green"
}
)
let button2 = document.querySelector ("#two")
button2.addEventListener("click", function changeColor() {
    document.body.style.backgroundColor = "blue"
}
)
let button3 = document.querySelector ("#three")
button3.addEventListener("click", function changeColor() {
    document.body.style.backgroundColor = "red"
}
)