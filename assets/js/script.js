var searchBtn = document.querySelector(".searchBtn")
var cityContainer = document.querySelector("#currentCity")
var currentTemp = document.getElementById('currentTemp')

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
        console.log(data);
        cityContainer.textContent = data.name
        currentTemp.textContent = data.main.currentTemp
    })
}