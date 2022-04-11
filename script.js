var srchBtn = $("#srchBtn");
var input = $("#city-name");
var currentDay = moment().format('(MM/DD/YYYY)');
var dateTextEl = $(".current-day");

var tempEl = document.getElementById('currTemp');
var userCity = document.getElementById('current-city');


srchBtn.on('click', function() {
console.log(srchBtn);
var userInput = input.val()
var requestURl = "http://api.openweathermap.org/geo/1.0/direct?q=" + userInput + " &appid=50240b9879c23b5e1b29ef0ef1bc15dc"


fetch(requestURl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    // var userCityh2 = document.createElement("h2")
    // userCityh2.textContent = data.local_names.name
    // userCity.appendChild(userCityh2);

var lat = data[0].lat
var lon = data[0].lon
var requestURl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=50240b9879c23b5e1b29ef0ef1bc15dc"
fetch(requestURl2)
.then(function (response) {
  return response.json();
})
.then(function (data) {
    console.log(data);
    var tempH3 = document.createElement("h3");
    tempH3.textContent = data.current.temp
    tempEl.appendChild(tempH3);
    
    
});
});
});

displayDay()
function displayDay() {
   dateTextEl.text(currentDay);
}

