// let heading_element = document.querySelector ("#heading")
// console.log(heading_element.innerText);
// heading_element.innerText = "Nguyễn Anh Hào"
// heading_element.style.display = "inline-block";
// heading_element.style.paddingRight = "20px";

// let paragraph_element = document.querySelector ("p");
// paragraph_element.innerText = "Tôi không bị đâu";
// paragraph_element.style.backgroundColor = "green";
// paragraph_element.style.color = "pink";
// paragraph_element.style.display = "inline-block";
// paragraph_element.style.fontSize = "30px";
// console.log(paragraph_element.innerText);

// let title_element = document.querySelector ("title");
// title_element.innerText = "Nguyễn Anh Hào";
// console.log(title_element.innerText);

let div_element = document.createElement("div")
div_element.style.width = "200px"
div_element.style.height = "200px"
div_element.style.borderRadius = "50%"
div_element.style.backgroundColor = "green"
div_element.style.display = "flex"
div_element.style.justifyContent = "center"
div_element.style.alignItems = "center"
document.body.appendChild(div_element)

let img_element = document.createElement("img")
img_element.src = "https://i.pinimg.com/474x/09/18/59/0918595b0cf94704219d0d5ac27ca833.jpg"
img_element.style.height = "150px"
div_element.appendChild(img_element)

let a_element = document.createElement("a")
a_element.innerText = "Dẫn tới Youtube"
a_element.href = "https://www.youtube.com/"
a_element.target = "blank"
document.body.appendChild(a_element)

let container = document.querySelector (".container");
container.style.width = "500px"
container.style.height = "400px"
container.style.borderTop = "2px solid blue"
container.style.margin = "auto"
container.style.backgroundColor = "white"
container.style.boxShadow = "1px 1px 5px grey"

let line1_element = document.createElement("p")
line1_element.innerText = "Hello,"
line1_element.style.marginLeft = "40px"
line1_element.style.marginTop = "40px"
line1_element.style.color = "grey"
line1_element.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri"
container.appendChild(line1_element)

let line2_element = document.createElement("p")
line2_element.innerText = "Please click the button below to verify your email address."
line2_element.style.marginLeft = "40px"
line2_element.style.marginTop = "20px"
line2_element.style.color = "grey"
line2_element.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri"
container.appendChild(line2_element)

let box = document.createElement("div")
box.style.width = "230px"
box.style.height = "40px"
box.style.backgroundColor = "blue"
box.style.margin = "auto"
box.style.color = "white"
box.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri"
box.style.display = "flex"
box.style.justifyContent = "center"
box.style.alignItems = "center"
box.innerText = "Verify Email Address"
box.style.borderRadius = "3px"
container.appendChild(box)

let line3_element = document.createElement("p")
line3_element.innerText = "You may also copy and paste this link in your web browser:"
line3_element.style.marginLeft = "40px"
line3_element.style.marginTop = "20px"
line3_element.style.color = "grey"
line3_element.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri"
container.appendChild(line3_element)

let link = document.createElement("a")
link.innerText = "https://www.youtube.com/"
link.href = "https://www.youtube.com/"
link.style.marginLeft = "40px"
link.style.marginTop = "20px"
link.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri"
container.appendChild(link)

let line4_element = document.createElement("p")
line4_element.innerText = "To ensure that you receive future emails from us, please add Udacity to your email contacts.."
line4_element.style.marginLeft = "40px"
line4_element.style.marginTop = "100px"
line4_element.style.color = "grey"
line4_element.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri"
container.appendChild(line4_element)