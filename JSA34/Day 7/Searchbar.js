let inputSearch = document.getElementById("inputSearch");
let searchBtn = document.getElementById("searchBtn");
let searchResult = document.querySelector(".searchResult");

searchBtn.addEventListener("click", function () {
console.log(inputSearch.value);
//1. Tạo khối: createElement
let div_element = document.createElement("div");

//2. Gán css
div_element.style.width = "200px";
div_element.style.height = "50px";
div_element.style.marginBottom = "10px";
div_element.style.backgroundColor = "grey";

//3. Gán nội dung
div_element.innerText = 

//4. Append vào searchResults
searchResult.appendChild(div_element);

// clear input value
inputSearch.value = "";
});