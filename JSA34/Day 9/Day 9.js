// // Lưu dữ liệu
// localStorage.setItem("Name", "Phương");
// localStorage.setItem("Name1", "Phương");
// localStorage.setItem("Name", "Bách");
// localStorage.setItem("age", 100);

// // Lưu 2 trường dữ liệu vào local: school, address
// localStorage.setItem("school", "Mindx");
// localStorage.setItem("address", "71 Nguyễn Chí Thanh");

// // Lấy dữ liệu
// let name_localStorage = localStorage.getItem("Name");

// let age_localStorage = localStorage.getItem("age");
// console.log(`${name_localStorage} - ${age_localStorage}`);

// let school_localStorage = localStorage.getItem("school");
// let address_localStorage = localStorage.getItem("address");

// console.log(`${school_localStorage} - ${address_localStorage}`);

// let delete_all = document.getElementById("delete_all");
// delete_all.addEventListener("click", function () {
//   localStorage.removeItem("Name");
// });

// // Dùng Dom lấy nút delete_age theo hàm document.querySelector("")
// let delete_age = document.querySelector(".delete_age");
// delete_age.addEventListener("click", function () {
//   localStorage.removeItem("age");
// });

let football_player = {
  name: "Kaka",
  age: 40,
  club: "AC Milan",
  height: "1m78",
};

console.log(football_player.club);

// Lưu vào
localStorage.setItem("player", JSON.stringify(football_player));

/**
 * Khi lưu 1 dữ liểu dạng object hoặc array vào localStorage: dùng JSON.stringify(object/array)
 * Khi lấy dữ liệu được lưu ở dạng object String hoặc array String thì ta dùng: JSON.parse()
 */

let play_local = localStorage.getItem("player");
console.log(play_local.height);
console.log(JSON.parse(play_local).height);
