// let sum=0
// for(let i=1; i<=10; i=i+2) {
//     sum=sum+i
// }
// console.log(sum)

// let a=Number(prompt("Nhập số đầu:"))
// let b=Number(prompt("Nhập số cuối:"))
// let sum=0
// for(let i=a; i<=b; i++) {
//     sum=sum+i
// }
// console.log(sum)

// let a=Number(prompt("Nhập số cần tìm giai thừa"))
// let sum=1
// for(let i=a; i>=1; i--) {
//     sum=sum*i
// }
// console.log(sum)

// let a=Number(prompt("Nhập a:"))
// let b=Number(prompt("Nhập b:"))
// let c=Number(prompt("Nhập c:"))
// if (a>100 || b>100 || c>100) {
//     alert("Nhập lại")
// } else {
//     console.log((a-b)*c)
// }

let n=((prompt("Nhập n:")))
let m=(prompt("Nhập m:"))
sum=""
for (j=1; j<=n; j++){
    for (let i=1; i<=m; i++) {
        sum=sum+" #"
    }
    sum = sum + "\n\n"
}
console.log(sum)



