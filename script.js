var srchBtn = $("#srchBtn");
var input = $("#city-name");
var currentDay = moment().format('(MM/DD/YYYY)');
var dateTextEl = $(".current-day");

var tempEl = document.getElementById('currTemp');
var userCity = document.getElementById('current-city');
var day1temp = document.getElementById('ftrTemp1');
var day1date = document.getElementById('ftrDate1');
var img1 = document.getElementById('img1');

srchBtn.on('click', function() {
console.log(srchBtn);
var userInput = input.val()
var requestURl = "http://api.openweathermap.org/geo/1.0/direct?q=" + userInput + " &appid=50240b9879c23b5e1b29ef0ef1bc15dc"


fetch(requestURl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    userCity.textContent = data[0].name

var lat = data[0].lat
var lon = data[0].lon
var requestURl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=50240b9879c23b5e1b29ef0ef1bc15dc&units=imperial"
fetch(requestURl2)
.then(function (response) {
  return response.json();
})
.then(function (data) {
    console.log(data);
    var tempH3 = document.createElement("h3");
    tempH3.textContent = data.current.temp
    tempEl.appendChild(tempH3);
    
    day1temp.innerText = data.daily[1].temp.day
    day1date.innerText = moment.unix(data.daily[1].dt).format('(MM/DD/YYYY)');
    var imgUrl = "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon +".png"
    img1.setAttribute("src", imgUrl)
    
});
});
});

displayDay()
function displayDay() {
   dateTextEl.text(currentDay);
}

