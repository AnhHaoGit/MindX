let render_value = document.querySelector('.render_value');
let input_search = document.querySelector('input');
let button_search = document.querySelector('button');
var photoAPI = 'https://jsonplaceholder.typicode.com/photos' //Nguồn API

// Tìm kiếm giá trị thông qua ID
button_search.addEventListener('click', function () {
  fetch(photoAPI)
    .then((response) => response.json())
    .then((data) => {
      data = data.slice(0, 10); //Slice() lấy các phần tử có chỉ số từ 0-9
      for (let i = 0; i < data.length; i++) {
        if (input_search.value == data[i].id) {
          render_value.innerHTML = `
          <ul>
            <b>${data[i].title}</b>
            <li>${data[i].id}</li>
          </ul>
        `;
        } else if (input_search.value === null) {
          render_value.innerHTML = `
          <ul>
            <b>${data[i].title}</b>
            <li>${data[i].id}</li>
          </ul>
        `;
        }
      }
    });
});

// Render các giá trị
fetch(photoAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    let newData = data.slice(0, 10); //Slice() lấy các phần tử có chỉ số từ 0-9
    console.log(newData)

    // Tạo 1 mảng mới có các id là số chẵn
    // let mangSoChan = [];
    // for (let i = 0; i < newData.length; i++) {
    //   if (newData[i].id % 2 == 0) {
    //     mangSoChan.push(newData[i]);
    //   }
    // }

    // Hiển thị các object ra ngoài giao diện
    for (let i = 0; i < newData.length; i++) {
      let ul = document.createElement('ul');
      ul.innerHTML = `
            <b>${newData[i].title}</b>
            <li>${newData[i].id}</li>
        `;
      render_value.appendChild(ul);
    }
  });

