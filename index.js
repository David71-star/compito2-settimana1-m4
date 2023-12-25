let url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem";

const getSongs = function () {
  fetch(url)
    .then(function (songs) {
      return songs.json();
    })
    .then(function (realSongs) {
      console.log(realSongs);
    });
};
getSongs();
// const eminemFetch = fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
