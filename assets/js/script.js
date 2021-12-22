var searchBtn = document.querySelector(".searchBtn")
var cityContainer = document.querySelector("#currentCity")
var currentTemp = document.getElementById('currentTemp')
var weatherIcon = document.getElementById('weatherIcon')
var feelsLike = document.getElementById('feelsLike')
var currentHumidity = document.getElementById('currentHumidity')
var tempMax = document.getElementById('tempMax')
var tempMin = document.getElementById('tempMin')


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
        weatherIcon.textcontent = data.weather.icon
        currentTemp.textContent = data.main.temp
        console.log(currentTemp)
        feelsLike.textContent = data.main.feels_like
        console.log(feelsLike)
        currentHumidity.textContent = data.main.humidity
        console.log(currentHumidity)
        tempMax.textContent = data.main.temp_max
        console.log(tempMax)
        tempMin.textContent = data.main.temp_min
        console.log(tempMin)
    })
     // "http://openweathermap.org/img/wn/" + data.weather.icon + ".png"
    
}