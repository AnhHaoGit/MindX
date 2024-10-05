// Import the functions you need from the SDKs you need
import {
  get,
  getDatabase,
  set,
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAftOUcRliMFcpwLYyICukj5ObN2tYgy18",
  authDomain: "jsi31-9bab7.firebaseapp.com",
  databaseURL: "https://jsi31-9bab7-default-rtdb.firebaseio.com",
  projectId: "jsi31-9bab7",
  storageBucket: "jsi31-9bab7.appspot.com",
  messagingSenderId: "60154859710",
  appId: "1:60154859710:web:6a74410fa7e8dfb1d5ceef",
  measurementId: "G-NVSQXSQZBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
// const analytics = getAnalytics(app);

let nameInput = document.getElementById("name")
let ageInput = document.getElementById("age")
let emailInput = document.getElementById("email")
let add_btn = document.getElementById("add_btn")
let read_btn = document.getElementById("read_btn")

let dataContainer = document.getElementById("data")

add_btn.addEventListener("click", function () {

  let ID = window.uuidv4();


  set(ref(database, "User/" + ID), {
    userId: ID,
    name: nameInput.value,
    age: ageInput.value,
    email: emailInput.value,
  }).then(() => {
    alert("Success")
  }).catch((error) => {
    alert(error)
  })
})

// set(đường dẫn, nhánh + id (nếu có)): trả về Promise

read_btn.addEventListener("click", function () {
  onValue(ref(database, "User"), (snap) => {
    dataContainer.innerHTML = ''
    let data = snap.val()
    let newData = Object.values(data)
    for (let i = 0; i <= (newData.length); i++) {
      let data_ = document.createElement('div');
      data_.innerHTML = `
            <p>${newData[i].email}</p>
            `;
      dataContainer.appendChild(data_);
    }
  })
})
// Object.values(): tạo Array mới từ Object