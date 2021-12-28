var searchBtn = document.querySelector(".searchBtn")
var cityContainer = document.querySelector("#currentCity")
var currentTemp = document.getElementById('currentTemp')
var weatherIcon = document.getElementById('weatherIcon')
var feelsLike = document.getElementById('feelsLike')
var currentHumidity = document.getElementById('currentHumidity')
var tempMax = document.getElementById('tempMax')
var tempMin = document.getElementById('tempMin')
var weeklyForecastContainer = document.querySelector('#weekly-forecast-container')
var uvIndex = document.getElementById('uvIndex')
var icon = document.getElementById('displayIcon')
var historyContainer = document.getElementById('savedCity')


// var cityUrl="https://api.openweathermap.org/data/2.5/weather?q=" + currentCity +"&units=metric&appid=a9be3d064e53eb67f8c76693caefab55";
// 5 day -- "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=a9be3d064e53eb67f8c76693caefab55"

searchBtn.addEventListener("click", getCity)

function getCity(e) {
    e.preventDefault()
    var city = document.querySelector('.city').value
    getCurrentWeather(city)
    setHistory(city)
}

function setHistory(city) {
    var storage = JSON.parse(localStorage.getItem('weatherHistory'))
    if(storage === null) {
        storage = []
    }
    storage.push(city)
    localStorage.setItem('weatherHistory', JSON.stringify(storage))
    createHistory()
}

createHistory()
function createHistory() {
    var storage = JSON.parse(localStorage.getItem('weatherHistory'))
    if(storage === null) {
        historyContainer.textContent = 'No Current Search History'
    } else {
        historyContainer.textContent = ''
        for (var i = 0; i < storage.length; i++) {
            var historyBtn = document.createElement('button')
            historyBtn.textContent = storage[i]
            historyContainer.append(historyBtn)

            historyBtn.addEventListener('click', function(event) {
                getCurrentWeather(event.target.textContent)
            })
        }
    }
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
        iconLink = "http://openweathermap.org/img/wn/" + weatherIcon + ".png"
        icon.setAttribute('src', iconLink)

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
    weeklyForecastContainer.textContent = ''
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon + "&appid=a9be3d064e53eb67f8c76693caefab55&units=metric")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        uvIndex.textContent = "UV Index: " + data.current.uvi

        if(uvIndex >= 7){
            uvIndex.setAttribute("class","badge bg-danger");
            
        }

        else if(data.current.uvi < 7 && data.current.uvi > 2) {
            uvIndex.setAttribute("class","badge bg-warning");
            

        } 
        else {
            uvIndex.setAttribute("class","badge bg-success");
            
        } 
   
        for (var i = 0; i < 5; i++) {
            var card = document.createElement('div')
            card.setAttribute('class','card')
            weeklyForecastContainer.append(card)
    
            var date = document.createElement('h3')
            date.textContent = moment().add(i+1, 'days').format('dddd')
            card.prepend(date)

            var fiveDayIcon = document.createElement('img')
            fiveDayIcon.setAttribute('src', "http://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + ".png")
            card.append(fiveDayIcon)
    
            var dailyTempHigh = document.createElement('p')
            dailyTempHigh.textContent ="High of: " + data.daily[i].temp.max
            console.log(dailyTempHigh)
            card.append (dailyTempHigh)
            
            var dailyTempLow = document.createElement('p')
            dailyTempLow.textContent="Low of: " + data.daily[i].temp.min
            console.log(dailyTempLow)
            card.append (dailyTempLow)
    
            var dailyHumidity = document.createElement('p')
            dailyHumidity.textContent=data.daily[i].humidity
            console.log(dailyHumidity)
            card.append (dailyHumidity)
    
            var dailyWind = document.createElement('p')
            dailyWind.textContent=data.daily[i].wind_speed + " Km/H"
            console.log(dailyWind)
            card.append (dailyWind)
        }

    })
}

