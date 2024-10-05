let a=Number(prompt("Nhập độ dài cạnh a của tam giác"))
let b=Number(prompt("Nhập độ dài cạnh b của tam giác"))
let c=Number(prompt("Nhập độ dài cạnh c của tam giác"))
p=(a+b+c)/2
S=Math.sqrt(p*(p-a)*(p-b)*(p-c))
if (a+b<=c || b+c<=a || c+a<=b || Math.abs(b-a)>=c || Math.abs(c-a)>=b || Math.abs(b-c)>=a) {
    alert("a,b,c không là độ dài ba cạnh một tam giác. Nhập lại!")
} else {
    alert("Diện tích của tam giác là " + S + "(đvdt)")
}
