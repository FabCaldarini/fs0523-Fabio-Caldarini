fetch("https://striveschool-api.herokuapp.com/books")
  .then((result) => result.json())
  .then((data) => console.log(data));
