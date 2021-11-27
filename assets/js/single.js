// // City weather API
// 
// // 5 Day forecast API
// // var cityCoord="https://api.openweathermap.org/data/2.5/onecall?lat=cityLat&lon=" + lat + lon + "&exclude=hourly,daily&units=imperial&appid=a9be3d064e53eb67f8c76693caefab55"; 
// // var savedCity dsiplays fetch response data name
// // 
// // var city is searchBtn input

// var searchBtn=document.getElementsByClassName('searchBtn');
// var city=document.getElementsByClassName('city');

// console.log(city);
// console.log(searchBtn);

// searchBtn.addEventListener('click', function(){
//     console.log('Adam')
// })


// searchBtn.addEventListener('click',{
//     handleEvent: function(searchBtn) {
//     fetch(cityUrl) 
//         console.log(cityUrl);
//         // city name to save in localStorage
//          window.localStorage.setItem(response.data.name);
//         // lat and lon data variables for fetch
//         var lat=response.coord.lat;
//         var lon=response.coord.lon;
//     fetch(cityCoord)
//     // create 5 day forecast
//     function weatherForecast(data) {
//         var dailyForecast = data.daily;
//         //loop through days while creating card elements
//         for (var i = 0; i <= 5; i++) {
//             var forecastIcon = dailyForecast[i].weather[0].icon;
//             var cityTemp = dailyForecast[i].temp.day;
//             var Speed = dailyForecast[i].wind_speed;
//             var humidityLvl = dailyForecast[i].humidity;
//             var displayIcon = document.querySelector("#day-" + [i]);
//             displayIcon.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
//         }
//     }
// // clicking on a saved city retrieves localStorage, var at top of page    
// document.addEventListener(click,"savedCity");
// }})
// 

$(document).ready(function(){
   
    $(".resultWeather").append("<div id=iconBlock><span id=currentCity></span><img id=forecastIcon alt=logo></div>");
    $(".resultWeather").append("<p id=currentTemp><p>");
    $('#searchBtn').keypress(function(event){
        if (event.keyCode == 10 || event.keyCode == 13) 
            event.preventDefault();
            
      });
      apiCall();
      
})

function apiCall() {
    var currentCity="Toronto";
    console.log(currentCity);
    console.log('anything')
    // get element by class
    // var currentCity=$("#cityName").val();
    var cityUrl="https://api.openweathermap.org/data/2.5/weather?q=" + currentCity +"&units=imperial&appid=a9be3d064e53eb67f8c76693caefab55";
    
    $.ajax({
        url: cityUrl,
        method: "GET"
        }).then(function(response) {
            console.log(response); 
            $('#currentCity').text(currentCity);       
            var forecastIconCode = response.weather[0].icon;
            var forecastIconUrl = "https://openweathermap.org/img/wn/"+forecastIconCode+".png";
            $('#forecastIcon').attr('src', forecastIconUrl);
            $('#currentTemp').text(response.main.temp)
            console.log('iconBlock');      
  })
} 

