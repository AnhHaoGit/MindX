const myPromise = new Promise((resolve, reject) => {
  let myName = "Hao"
  if (myName == "Hao") {
    resolve("TRUE")
  } else {
    reject("FALSE")
  }
})

//Cach 1
// myPromise.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// })

//Cach 2
async function execute() {
  try {
    const dataImage = await myPromise
    console.log(dataImage)
  } catch (err) {
    console.log(err);
  }
}
execute()

// let img = document.querySelectorAll("img")
// fetch("https://picsum.photos/200/300")
//   .then((data) => {
//     img[0].src = data.url
//   }
// )
// fetch("https://picsum.photos/200/300")
//   .then((data) => {
//     img[1].src = data.url
//   }
// )
// fetch("https://picsum.photos/200/300")
//   .then((data) => {
//     img[2].src = data.url
//   }
// )

// async function execute(num) {
//   const dataImage = await fetch("https://picsum.photos/200/300") 
//   img[num].src = dataImage.url
// }
// for (i=0; i<img.length; i++) {
//   execute(i)
// }


// try-catch: reject
// await: resolve
