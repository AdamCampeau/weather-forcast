var searchBtn = document.querySelector(".searchBtn")
var currentCity = document.getElementById('cityName')

var cityUrl="https://api.openweathermap.org/data/2.5/weather?q=" + currentCity +"&units=metric&appid=a9be3d064e53eb67f8c76693caefab55";

// local storage
var  savedCityContainer = document.getElementById('savedCity-container')
var cityStorage = JSON.parse(localStorage.getItem(currentCity))
console.log(currentCity)

var toStorage = [];

if (cityStorage===null) {
    savedCity.textContent = []
} else {
    savedCity.textContent = ''
    for(var i=0;i<cityStorage.length; i++) {
        var p =document.createElement('p')
        console.log(p)
        p.textContent=''+ cityStorage[i].name
        console.log[i]
        savedCityContainer.append(p);
    }
}



function getCity(e) {
    e.preventDefault()
    var city = document.querySelector('.city').value
    console.log(city)
    getCurrentWeather(city)
}

searchBtn.addEventListener("click", getCity)

function getForecast(d) {
    d.preventDefault()
    var coord = document.querySelector('.coord').value
    getForecastWeather(coord)
}

function getCurrentWeather(currentCity) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + currentCity +"&units=metric&appid=a9be3d064e53eb67f8c76693caefab55")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        toStorage.push(currentCity);
        console.log(toStorage);
        localStorage.setItem("cityName", JSON.stringify(toStorage));
    })
}

function getForecastWeather(forecastWeather) {
        fetch("https://api.openweathermap.org/data/2.5/onecall?" + currentCord + "&appid=a9be3d064e53eb67f8c76693caefab55")
        .then(responseForecast => responseForecast.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('cityCoord', currentCoord)
        })
}
     
function savedCities() {
    savedCityContainer.textContent=savedCity

    var btn=document.createElement('button')
    btn.textContent=savedCity
    savedCityContainer.savedCity.append(btn)

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
//var currentCoord = currentCity.textcontent.coord;



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



