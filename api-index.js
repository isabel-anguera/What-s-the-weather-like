console.log('Hello, Sheet!');

window.onload = requestJSON;
setInterval(requestJSON, 10000);

function requestJSON() {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=New%20York&APPID=3f56d66bf44e9bbf90cbf9c5a0db23a5')
    .then(response => response.json())
    .then(gotJSON);
}

function gotJSON(json) {
  console.log('Update Data');
  const weatherInfo = json.weather;

  const answer = document.getElementById('answer');

  answer.innerHTML = '';

  for (const weather of weatherInfo) {
    const desc = weather.description;
    console.log(desc);
 
    const newH3 = document.createElement('h3');
    newH3.innerHTML = desc;
    answer.appendChild(newH3);
  }
}