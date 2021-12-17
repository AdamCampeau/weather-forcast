var searchBtn = document.querySelector(".searchBtn")
var currentCity = document.getElementById('currentCity')

var cityUrl="https://api.openweathermap.org/data/2.5/weather?q=" + currentCity +"&units=metric&appid=a9be3d064e53eb67f8c76693caefab55";

searchBtn.addEventListener("click", getCity)

function getCity(e) {
    e.preventDefault()
    var city = document.querySelector('.city').value
    getCurrentWeather(city)
}

function getCurrentWeather(currentCity) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + currentCity +"&units=metric&appid=a9be3d064e53eb67f8c76693caefab55")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        currentCity.textContent = ''
    })
    
}

// parse and display weathe data for the day

// main: {temp: 12.83, feels_like: 12.02, temp_min: 10.82, temp_max: 13.97, pressure: 1002, …}
//name: "Toronto
//visibility: 10000
//weather: [{…}]
//wind: {speed: 2.24, deg: 231, gust: 7.15}
//clouds: {all: 40}

// server response code
//cod: 200

//longitude and latitude needed for other API use for 5 Day forecaset
//coord: {lon: -79.4163, lat: 43.7001}
var currentCord = currentCity.textcontent.coord;

function getForecastWeather(forecastWeather) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?" + currentCord + "&appid=a9be3d064e53eb67f8c76693caefab55")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        currentCord.textContent = ''
    })
    
}
