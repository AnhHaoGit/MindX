const list_product = [
    {
        name: "Chair",
        price: 26,
        availability: false,
        id: "1",
        category: "shirt"
    },

    {
        name: "Cup",
        price: 7,
        availability: true,
        id: "2",
        category: "shoes"
    },

    {
        name: "Table",
        price: 64,
        availability: true,
        id: "3",
        category: "shirt"
    }
]

const container = document.getElementById("container")

function renderProduct(arrayProducts) {
    for (i = 0; i < arrayProducts.length; i++) {
        let product = document.createElement("div");
        product.className = "box";
        product.innerHTML = `
        <p>ID: <b>${arrayProducts[i].id}</b></p>
        <p>Tên sản phẩm: <b>${arrayProducts[i].name}</b></p>
        <p>Giá tiền: <b>${arrayProducts[i].price}$</b></p>
        <p>Trạng thái: <b>${arrayProducts[i].availability ? 'Còn hàng' : 'Hết hàng'}</b></p>
        <p>Loại sản phẩm: <b>${arrayProducts[i].category}</b></p>
        `
        container.appendChild(product);
    }
}

renderProduct(list_product)