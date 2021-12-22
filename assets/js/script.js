const searchBtn = document.querySelector(".searchBtn")
let cityContainer = document.querySelector("#currentCity")
let currentTemp = document.getElementById('currentTemp')
let weatherIcon = document.getElementById('weatherIcon')
let feelsLike = document.getElementById('feelsLike')
let currentHumidity = document.getElementById('currentHumidity')
let tempMax = document.getElementById('tempMax')
const 

// var cityUrl="https://api.openweathermap.org/data/2.5/weather?q=" + currentCity +"&units=metric&appid=a9be3d064e53eb67f8c76693caefab55";

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
        //console.log(data);
        cityContainer.textContent = data.name
        weatherIcon.textcontent = data.weather
        currentTemp.textContent = data.main.temp
        feelsLike.textContent = data.main.feels_like
        currentHumidity.textContent = data.main.humidity
        tempMax.textContent = data.main.tempMax
        tempMin.textContent = data.main.tempMin
        console.log()
        //uvIndex.textContent = data.main
    })
}