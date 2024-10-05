let n = Number(prompt("Nhập vào n:"))
sum=0
for(i=1; i<=n; i++) {
    sum=sum+(i-1)*i
}
console.log(sum)