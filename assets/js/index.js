var searchBtn = document.querySelector(".searchBtn")
var currentCity = document.getElementById('currentCity')

var cityUrl="https://api.openweathermap.org/data/2.5/weather?q=" + currentCity +"&units=metric&appid=a9be3d064e53eb67f8c76693caefab55";

// local storage
var savedCity = document.getElementById('savedCity');
var storage = JSON.parse(localStorage.getItem('currentCity'));

if (storage===null) {
    cityContainer.textContent = ''
} else {
    cityContainer.textContent = ''
    for(var i=0;i<storage.length; i++) {
        var p =document.createElement('p')
        p.textContent=''+storage[i].name
        cityContainer.append(p)
    }
}

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

// name: "Toronto
// main:
//  feels_like: 12.02
//  humidity: 71
//  pressure: 1002
//  temp: 12.83
//  temp_max: 13.97
//  temp_min: 10.82
//
// visibility: 10000
// weather: Array(1)
//  0:
//      description: "scattered clouds"
//      icon: "03n"
//      id: 802
//      main: "Clouds"
//  length: 1
// wind: {speed: 2.24, deg: 231, gust: 7.15}
// clouds: {all: 40}

// server response code
// cod: 200

//longitude and latitude needed for other API use for 5 Day forecaset
// coord: {lon: -79.4163, lat: 43.7001}
var currentCord = currentCity.textcontent.coord;

function getForecastWeather(forecastWeather) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?" + currentCord + "&appid=a9be3d064e53eb67f8c76693caefab55")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        currentCord.textContent = ''
    })
    
}

// parse data

//daily.temp Units – default: kelvin, metric: Celsius, imperial: Fahrenheit. How to change units used
//daily.temp.morn Morning temperature.
//daily.temp.day Day temperature.
//daily.temp.eve Evening temperature.
//daily.temp.night Night temperature.
//daily.temp.min Min daily temperature.
//daily.temp.max Max daily temperature.
//daily.feels_like This accounts for the human perception of weather. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit. How to change units used
//daily.feels_like.morn Morning temperature.
//daily.feels_like.day Day temperature.
//daily.feels_like.eve Evening temperature.
//daily.feels_like.night
//daily.humidity
//daily.wind_speed



