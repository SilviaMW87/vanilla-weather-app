function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement =document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.main.temp;
}

let apiKey = "aaa7ba886d5c66918cc62a40c92a74723";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=${apiKey}`;

console.log(apiUrl);
axios.get(url).then(displayTemperature);

function showForecast(response) {
    console.log(response);
}

