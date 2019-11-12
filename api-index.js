var input = document.getElementById("text-box");
var userInput = document.getElementById("text-box").value;
console.log(userInput);
var searchedCities = [];

document.getElementById("text-box").onkeypress = function() {console.log(event)};

var apiKey = '3f56d66bf44e9bbf90cbf9c5a0db23a5';
var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput +'&APPID=' + apiKey;

console.log('Hello, Sheet!');

window.onload = requestJSON;
setInterval(requestJSON, 5000);

function requestJSON() {
  url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input.value +'&APPID=' + apiKey;
  fetch(url)
    .then(response => response.json())
    .then(gotJSON);
}

function gotJSON(json) {
  console.log('Update Data');
  const weatherInfo = json.weather;
  console.log(json);
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

  function checkKey() {
    if (event.key == 'Enter') {
      requestJSON();
    }
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



