var srchBtn = $("#srchBtn");
var input = $("#city-name");
var currentDay = moment().format('(MM/DD/YYYY)');
var dateTextEl = $(".current-day");

var tempEl = document.getElementById('currTemp');
var userCity = document.getElementById('current-city');
var userHum = document.getElementById('currHum');
var userUv = document.getElementById('currUV');
var day1temp = document.getElementById('ftrTemp1');
var day2temp = document.getElementById('ftrTemp2');
var day3temp = document.getElementById('ftrTemp3');
var day4temp = document.getElementById('ftrTemp4');
var day5temp = document.getElementById('ftrTemp5');
var day1date = document.getElementById('ftrDate1');
var day2date = document.getElementById('ftrDate2');
var day3date = document.getElementById('ftrDate3');
var day4date = document.getElementById('ftrDate4');
var day5date = document.getElementById('ftrDate5');
var day1wind = document.getElementById('ftrWind1');
var day2wind = document.getElementById('ftrWind2');
var day3wind = document.getElementById('ftrWind3');
var day4wind = document.getElementById('ftrWind4');
var day5wind = document.getElementById('ftrWind5');
var day1humid = document.getElementById('ftrHumidity1');
var day2humid = document.getElementById('ftrHumidity2');
var day3humid = document.getElementById('ftrHumidity3');
var day4humid = document.getElementById('ftrHumidity4');
var day5humid = document.getElementById('ftrHumidity5');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');

srchBtn.on('click', function() {
console.log(srchBtn);
var userInput = input.val()
var requestURl = "https://api.openweathermap.org/geo/1.0/direct?q=" + userInput + " &appid=50240b9879c23b5e1b29ef0ef1bc15dc"


fetch(requestURl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    userCity.innerText = data[0].name

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
    userHum.innerText = data.current.humidity;
    userUv.innerText = data.current.uvi
    
  
    day1date.innerText = moment.unix(data.daily[1].dt).format('(MM/DD/YYYY)');
    day2date.innerText = moment.unix(data.daily[2].dt).format('(MM/DD/YYYY)');
    day3date.innerText = moment.unix(data.daily[3].dt).format('(MM/DD/YYYY)');
    day4date.innerText = moment.unix(data.daily[4].dt).format('(MM/DD/YYYY)');
    day5date.innerText = moment.unix(data.daily[5].dt).format('(MM/DD/YYYY)');
    var imgUrl = "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon +".png"
    img1.setAttribute("src", imgUrl)
    var imgUrl2 = "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon +".png"
    img2.setAttribute("src", imgUrl2)
    var imgUrl3 = "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon +".png"
    img3.setAttribute("src", imgUrl3)
    var imgUrl4 = "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon +".png"
    img4.setAttribute("src", imgUrl4)
    var imgUrl5 = "http://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon +".png"
    img5.setAttribute("src", imgUrl5)
    day1temp.innerText = data.daily[1].temp.day
    day2temp.innerText = data.daily[2].temp.day
    day3temp.innerText = data.daily[3].temp.day
    day4temp.innerText = data.daily[4].temp.day
    day5temp.innerText = data.daily[5].temp.day

    day1wind.innerText = data.daily[1].wind_speed
    day2wind.innerText = data.daily[2].wind_speed
    day3wind.innerText = data.daily[3].wind_speed
    day4wind.innerText = data.daily[4].wind_speed
    day5wind.innerText = data.daily[5].wind_speed
    day1humid.innerText = data.daily[1].humidity
    day2humid.innerText = data.daily[2].humidity
    day3humid.innerText = data.daily[3].humidity
    day4humid.innerText = data.daily[4].humidity
    day5humid.innerText = data.daily[5].humidity
    
    
});
});
});

displayDay()
function displayDay() {
   dateTextEl.text(currentDay);
}

