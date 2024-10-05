let list_food = ["bún chả", "cơm rang", "phở bò"]
// console.log(list_food[1]) // ==> "bánh mì""
// console.log(list_food.length) // ==> 3

// list_food[list_food.length] = "cơm rang"
// list_food.push("Giá trị mới")

// list_food.pop()
// console.log(list_food)
a=list_food[2]
list_food[2] = list_food[0]
list_food[0]=a

b = prompt('Nhập 1 số bất kì trong khoảng từ 0 đến ' + (list_food.length - 1))
if (b>(list_food.length-1) || b<0) {
    alert("Nhập lại")
} else {
    alert ("Giá trị ở vị trí " + b + " là " + list_food[b] + ".")
}