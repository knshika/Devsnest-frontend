fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=khunti&APPID=6cc9a468034a6c8817b0ed8d38e5bad3"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
