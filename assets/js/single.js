// City weather API
var cityUrl="https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid=a9be3d064e53eb67f8c76693caefab55";
// 5 Day forecast API
var cityCoord="https://api.openweathermap.org/data/2.5/onecall?lat=cityLat&lon=" + lat + lon + "&exclude=hourly,daily&units=imperial&appid=a9be3d064e53eb67f8c76693caefab55"; 
// var savedCity dsiplays fetch response data name
var savedCity=window.localStorage.getItem(response.data.name);
//var city is searchBtn input
document.addEventListener(click,"searchBtn");
    fetch(cityUrl) {
        console.log(cityUrl);
        // parse city name to save in localStorage
         window.localStorage.setItem(response.data.name);
        // lat and lon data variables for fetch
        var lat=response.coord.lat;
        var lon=response.coord.lon;
    fetch(cityCoord)
    // create 5 day forecast
    function weatherForecast(data) {
        var dailyForecast = data.daily;
        //loop through days while creating card elements
        for (var i = 0; i <= 5; i++) {
            var weatherIcon = dailyForecast[i].weather[0].icon;
            var cityTemp = dailyForecast[i].temp.day;
            var windSpeed = dailyForecast[i].wind_speed;
            var humidityLvl = dailyForecast[i].humidity;
            var displayIcon = document.querySelector("#day-" + [i]);
            displayIcon.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        }
    }
    }
document.addEventListener(click,"savedCity");
    
