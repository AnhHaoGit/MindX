// Bước 1: lấy các thẻ div có class là response ở HTML
// Bước 2: Lấy ra đc value ở trong input search place
// Bước 3: Fetch đường link dựa theo giá trị của input search place (Thao khảo các tạo url dựa biến ở dòng 19)
// Bước 4: Fetch đường link từ bước 3
// Bước 5: Lấy giá trị latitude và longitude của bước 3 và fetch đường link thứ 2
// Bước 6: Gọi response và gán innerHTML vào, trong innerHTML thì chứa các giá trị cần thiết (place, latitude, longitude, temperature)

let inputSearch = document.querySelector("input");
let searchButton = document.querySelector("button");
let responseContainer = document.querySelector(".response")

searchButton.addEventListener("click", function () {
  responseContainer.innerHTML = ``
  let search = inputSearch.value.toLowerCase()
  let urlPlace = `https://geocoding-api.open-meteo.com/v1/search?name=${search}`
  fetch(urlPlace)
    .then((response) => response.json())
    .then((data) => {
      let place = data.results[0].name;
      let latitude = data.results[0].latitude;
      let longitude = data.results[0].longitude;

      // let url = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current_weather=true"
      let urlTemperature = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

      fetch(urlTemperature)
        .then((response) => response.json())
        .then((data_weather) => {
          console.log(data_weather)
          let temperature = data_weather.current_weather.temperature

          let response = document.createElement('div');
          response.className = "response2"
          response.innerHTML = `
            <p>Place: <b>${place}</b></p>
            <p>Latitude: <b>${latitude}</b></p>
            <p>Longitude: <b>${longitude}</b></p>
            <p>Temperature: <b>${temperature}</b></p>
            `;
          responseContainer.appendChild(response);
        });
    });
});
