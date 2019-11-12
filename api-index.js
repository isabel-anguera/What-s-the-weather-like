var input = document.getElementById("text-box");
const url = 'https://api.openweathermap.org/data/2.5/weather?q=New York&APPID=3f56d66bf44e9bbf90cbf9c5a0db23a5';
var userInput = document.getElementById("text-box").value;
console.log(userInput);

var searchedCities = [];

console.log('Hello, Sheet!');

window.onload = requestJSON;
setInterval(requestJSON, 10000);

function requestJSON() {
  fetch(url)
    .then(response => response.json())
    .then(gotJSON);
}

function gotJSON(json) {
  console.log('Update Data');
  const weatherInfo = json.weather;
  // const mainInfo = json.main;

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

  function searchCity() {
    console.log('hey');
    searchedCities.push(userInput);
    userInput.textContent += searchedCities;
    input.textContent = userInput;
    console.log(userInput);
    console.log(searchedCities);
    console.log(input);


  }

  // for (const main of mainInfo) {
  //   const temperature = main.temp;
  //   console.log(temperature);

  //   const newH3 = document.createElement('h3');
  //   newH3.innerHTML = temperature - 273.15*9/5 + 32 + "°F";
  //   answer.appenChild(newH3);
  // }


// input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
//    }
//  }



