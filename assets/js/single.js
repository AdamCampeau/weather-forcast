
$(document).ready(function(){
   
    $(".resultWeather").append("<div id=iconBlock><span id=currentCity></span><img id=forecastIcon alt=logo></div>");
    $(".resultWeather").append("<p id=currentTemp></p>");
    $(".resultWeather").append("<p id=currentHumidity></p>");
    $(".resultWeather").append("<p id=currentWind></p>");
    $(".resultWeather").append("<p id=uvIndex></p>");
    $(".resultWeather").append("<p id=uvIndex></p>")
    $('#searchBtn').keypress(function(event){
        if (event.keyCode == 10 || event.keyCode == 13) 
            event.preventDefault();
            
      });
      apiCall();
})

function apiCall() {
    var currentCity="Toronto";
    var cityLat= 'response.coord.lat';
    var cityLon = 'response.coord.lon';
    console.log(currentCity);
    console.log('anything')
    // get element by class
    // var currentCity=$("#cityName").val();
    
    var cityUrl="https://api.openweathermap.org/data/2.5/weather?q=" + currentCity +"&units=metric&appid=a9be3d064e53eb67f8c76693caefab55";
    var cordUrl="https://api.openweathermap.org/data/2.5/onecall?" + cityLat + cityLon + "&appid=a9be3d064e53eb67f8c76693caefab55";
      
    
    $.ajax({
        url: cityUrl , cordUrl,
        method: "GET"
        }).then(function(response) {
            console.log(response);
            //$('#cityLat').text(cityLat);
            //$('#cityLon').text(cityLon); 
            $('#currentCity').text(currentCity);       
            var forecastIconCode = response.weather[0].icon;
            var forecastIconUrl = "https://openweathermap.org/img/wn/"+forecastIconCode+".png";
            $('#forecastIcon').attr('src', forecastIconUrl);
            $('#currentTemp').text(response.main.temp);
            $('#currentHumidity').text(response.main.humidity);
            $('#currentWind').text(response.main.wind); 
            $('#cityLat').text(response.coord.lat);
            $('#cityLon').text(response.coord.lon);
            var dailyIconCode = response.weather[0].icon;
            var dailyIconUrl="http://openweathermap.org/img/wn/"+ dailyIconCode +".png"
            $('#dailyIcon').attr('src', dailyIconUrl);
            $('#uvIndex').text(response.current.uvi);
            $('#forescastId').text(response.daily.weather.icon);
            $('#forecastTemp').text(response.daily.temp);
            $('#forecastHumid').text(response.daily.humidity);
            $('#forecastWind').text(response.daily.wind_speed);           
            
            console.log('iconBlock');
              
  })
}
/*function apiCallTwo() {
    var cordUrl="https://api.openweathermap.org/data/2.5/onecall?" + cityLat + cityLon + "&appid=a9be3d064e53eb67f8c76693caefab55";
    $.ajax({
        url: cordUrl,
        method: "GET"
        }).then(function(response) {
            var dailyIconCode = response.weather[0].icon;
            var dailyIconUrl="http://openweathermap.org/img/wn/"+ dailyIconCode +".png"
            $('#dailyIcon').attr('src', dailyIconUrl);
            $('#uvIndex').text(response.current.uvi);
            $('#forescastId').text(response.daily.weather.icon);
            $('#forecastTemp').text(response.daily.temp);
            $('#forecastHumid').text(response.daily.humidity);
            $('#forecastWind').text(response.daily.wind_speed);
    })
}
*/
    

