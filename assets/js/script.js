var searchBtn = document.querySelector(".searchBtn")
var cityContainer = document.querySelector("#currentCity")
var currentTemp = document.getElementById('currentTemp')
var weatherIcon = document.getElementById('weatherIcon')
var feelsLike = document.getElementById('feelsLike')
var currentHumidity = document.getElementById('currentHumidity')
var tempMax = document.getElementById('tempMax')
var tempMin = document.getElementById('tempMin')


// var cityUrl="https://api.openweathermap.org/data/2.5/weather?q=" + currentCity +"&units=metric&appid=a9be3d064e53eb67f8c76693caefab55";
// 5 day -- "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=a9be3d064e53eb67f8c76693caefab55"

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
        var lat = data.coord.lat
        var lon = data.coord.lon
        getFiveDay(lat,lon)
        
        //console.log(data);
        
        cityContainer.textContent = data.name
        
        currentTemp.textContent = "Temp: " + data.main.temp
        //console.log(currentTemp)
        
        feelsLike.textContent = "Feels Like: " + data.main.feels_like
        //console.log(feelsLike)
        
        currentHumidity.textContent = "Humidity: " + data.main.humidity
        //console.log(currentHumidity)
        
        tempMax.textContent ="High of: " + data.main.temp_max
        //console.log(tempMax)
        
        tempMin.textContent = "Low of: " + data.main.temp_min
        //console.log(tempMin)
    })
     // "http://openweathermap.org/img/wn/" + data.weather.icon + ".png"
    
}

function getFiveDay(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon + "&appid=a9be3d064e53eb67f8c76693caefab55")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        uvIndex.textContent = data.current.uvi
        
        dailyTempHigh.textContent = data.daily.temp.max
        console.log(dailyTempHigh)
        
        dailyTempLow.textContent=data.daily.temp.min
        dailyHumidity.textContent=data.daily.humidity
        dailyWind.textContent=data.daily.wind_speed
        dailyUvi.textContent=data.daily.uvi
    })
}