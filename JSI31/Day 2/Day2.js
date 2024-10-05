// function branch(x) {
//     if (x==1) {
//         return "Nhánh 1"
//     } else if (x==2) {
//         return "Nhánh 2"
//     }
//     return "Không thoả mãn"
// }
// console.log(branch(3))

let li = document.getElementsByTagName("li")
for (i=0; i<li.length; i++) {
    console.log(li[i].innerText)
}
line1 = document.getElementsByClassName("line1")
line2 = document.getElementsByClassName("line2")


line1[0].style.color = "blue"
line1[1].style.color = "blue"

line2[0].style.color = "green"
line2[1].style.color = "green"