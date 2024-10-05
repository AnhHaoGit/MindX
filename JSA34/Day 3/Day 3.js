// let score = 8
// if (score == "9") {
//     console.log("Đây là số 8")
// } else if (score == "8") {
//     console.log("Số 8 nè")
// } else {
//     console.log("Đây không phải số 8")
// }
/**
 * 0 -> 4 => Kém
 * 4 -> 5 => Hạng Trung Bình
 * 5 -> 6 => Trung bình khá
 * 6 -> 7 => Khá
 * 7 -> 8 => Khá giỏi
 * 8 -> 9 => Giỏi
 * 9 -> 10 => Xuất sắc
 */

// let score = prompt("Nhập vào điểm của bạn")
// if (score>=0 && score<4) {
//     alert ("Kém")
// } else if (score>=4 && score<5) {
//     alert ("Trung bình")
// } else if (score>=5 && score<6) {
//     alert ("Trung bình khá")
// } else if (score>=6 && score<7) {
//     alert ("Khá")
// } else if (score>=7 && score<8) {
//     alert ("Khá giỏi")
// } else if (score>=8 && score<9) {
//     alert ("Giỏi")
// } else if (score>=9 && score<=10) {
//     alert ("Xuất sắc")
// } else {
//     alert ("Nhập lại điểm của bạn")
// }

// let student_a = {
//     name: "Hào",
//     age: 16,
//     school: "Kim Liên",
//     status: "Vui vẻ"
// }

// let student_b = {
//     name: "Thắng",
//     age: 20,
//     school: "Ngoại Thương",
//     status: "Searching..."
// }
// student_b["favor"]="Đút lót"
// student_b["age"] = 100
// console.log(student_b)
// let student_c = {
//     name: "Đăng",
//     age: 17,
//     school: "Hai Bà Trưng",
//     status: "Vui"
// }
// let a=prompt("Nhập vào giá trị của a")
// let b=prompt("Nhập vào giá trị của b")
// let c=prompt("Nhập vào giá trị của c")

// if (c>b && c>a){
//     console.log("Số lớn nhất là: " + c)
// } else if (b>c && b>a){
//     console.log("Số lớn nhất là: " + b)
// } else if (a>b && a>c){
//     console.log("Số lớn nhất là: " + a)
// } else {
//     console.log("Nhập lại")
// }
let student_a = {
    name: "Hào",
    age: 16,
}
let student_b = {
    name: "Thắng",
    age: 20,
}
let student_c = {
    name: "Đăng",
    age: 17,
}
if (student_a.age > student_b.age && student_a.age > student_c.age) {
    console.log (student_a.name + " lớn tuổi nhất")
} else if (student_b.age > student_a.age && student_b.age > student_c.age) {
    console.log (student_b.name + " lớn tuổi nhất")
} else if (student_c.age > student_a.age && student_c.age > student_b.age) {
    console.log (student_c.name + " lớn tuổi nhất")
}