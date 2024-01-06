let url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem";
let url1 =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica";
let url2 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

let eminemFetch = fetch(url)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
    const card = json.data;
    const eminem = document.querySelector("#eminemSection");
    for (const data of card) {
      eminem.innerHTML += `<div class="card">
      <img src="${data.album.cover}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${data.album.title}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.artist.name}</li>
        <li class="list-group-item">${"duration: "} ${
        data.duration + " min"
      }</li>
      </ul>
    </div>`;
    }
  });

let metallicaFetch = fetch(url1)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
    const card = json.data;
    const metallica = document.querySelector("#metallicaSection");
    for (const data of card) {
      metallica.innerHTML += `<div class="card">
      <img src="${data.album.cover}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${data.album.title}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.artist.name}</li>
        <li class="list-group-item">${"duration: "} ${
        data.duration + " min"
      }</li>
      </ul>
    </div>`;
    }
  });

let queenFetch = fetch(url2)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
    const card = json.data;
    const queen = document.querySelector("#queenSection");
    for (const data of card) {
      queen.innerHTML += `<div class="card">
      <img src="${data.album.cover}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${data.album.title}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.artist.name}</li>
        <li class="list-group-item">${"duration: "} ${
        data.duration + " min"
      }</li>
      </ul>
    </div>`;
    }
  });
