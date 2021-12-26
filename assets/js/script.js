var searchBtn = document.querySelector(".searchBtn")
var cityContainer = document.querySelector("#currentCity")
var currentTemp = document.getElementById('currentTemp')
var weatherIcon = document.getElementById('weatherIcon')
var feelsLike = document.getElementById('feelsLike')
var currentHumidity = document.getElementById('currentHumidity')
var tempMax = document.getElementById('tempMax')
var tempMin = document.getElementById('tempMin')
var weeklyForecastContainer = document.querySelector('weekly-forecast-container')


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
        weatherIcon = data.weather[0].icon

        cityContainer.textContent = data.name
        
        currentTemp.textContent = "Temp: " + data.main.temp + " °C"
        //console.log(currentTemp)
        
        feelsLike.textContent = "Feels Like: " + data.main.feels_like + " °C"
        //console.log(feelsLike)
        
        currentHumidity.textContent = "Humidity: " + data.main.humidity + " %"
        //console.log(currentHumidity)
        
        tempMax.textContent ="High of: " + data.main.temp_max + " °C"
        //console.log(tempMax)
        
        tempMin.textContent = "Low of: " + data.main.temp_min + " °C"
        //console.log(tempMin)
    })
     // "http://openweathermap.org/img/wn/" + data.weather.icon + ".png"
    
}

function getFiveDay(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon + "&appid=a9be3d064e53eb67f8c76693caefab55")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        uvIndex.textContent = "UV Index: " + data.current.uvi

        if(uvIndex >= 7){
            cityUvEl.classList = "badge bg-danger";
            cityUvEl.textContent = uvIndex;
        }

        else if(uvIndex < 7 && uvIndex > 2) {
            cityUvEl.classList = "badge bg-warning";
            cityUvEl.textContent = uvIndex;

        } 
        else {
            cityUvEl.classList = "badge bg-success";
            cityUvEl.textContent = uvIndex;
        } 
   
        for (var i = 0; i < 5; i++)
        var card = document.createElement('div')
        card.setAttribute('class','card')
        weeklyForecastContainer.append(card)

        var date = document.createElement('h3')
        date.textContent = momement().add(i+1, 'days)').format('dddd')
        card.prepend(date)

        dailyTempHigh.textContent ="High of: " + data.daily[i].temp.max
        console.log(dailyTempHigh)
        card.append (dailyTempHigh)
        
        dailyTempLow.textContent="Low of: " + data.daily[i].temp.min
        console.log(dailyTempLow)
        card.append (dailyTempLow)

        dailyHumidity.textContent=data.daily[i].humidity
        console.log(dailyHumidity)
        card.append (dailyHumidity)

        dailyWind.textContent=data.daily[i].wind_speed + " Km/H"
        console.log(dailyWind)
        card.append (dailyWind)

        dailyUvi.textContent=data.daily[i].uvi
        console.log(dailyUvi)
        card.append (dailyUvi)

    })
}

