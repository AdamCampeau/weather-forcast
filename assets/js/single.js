// fetch for input of city
var cityUrl="https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid=a9be3d064e53eb67f8c76693caefab55";

var cityCoord="https://api.openweathermap.org/data/2.5/onecall?lat=cityLat&lon=" + lat + lon + "&exclude=hourly,daily&units=imperial&appid=a9be3d064e53eb67f8c76693caefab55'; 

// City Weather API fetch
var searchBtn = document.addEventListener(click,"searchBtn");
    fetch(cityUrl)
        if (!response.ok) {
            alert("Please enter a city");
            }
        // Grab city name, lat and lon from response
        return response.data(name, lat, lon);
        // parse city name to save in localStorage
        window.localStorage.setItem(city);
        // assign it to variable for cityCoord fetch
        fetch(cityCoord)


// create 5 day forecast
var weatherForecast = function(data) {
    var dailyForecast=data.daily;
    //loop through days while creating card elements
    for (var i = 0; i <= 5; i++) {
        var icon=dailyForecast[i].weather[0].icon;
        var temp=dailyForecast[i].temp.day;
        var wind=dailyForecast[i].wind_speed;
        var humidity=dailyForecast[i].humidity;
        var displayIcon=document.querySelector("#day-" + [i]);
        displayIcon.src="https://openweathermap.org/img/wn/" + icon + "@2x.png";
    
// search button saves to local storage
searchBtn.("click", weather);
    console.log("search button clicked");
    var city = $(this).attr("name");
      
    window.localStorage.setItem(city);
    getCity();
}

