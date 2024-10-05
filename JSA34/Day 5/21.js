n=Number(prompt("Nhập một số nguyên dương n:"))
sum=""
for (i=n; i>=1; i--) {
    for (k=1; k<=i; k++) {
        sum=sum+"*"
    }
    sum=sum + "\n"
}
console.log(sum)