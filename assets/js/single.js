// City Weather API fetch
let weather = {
    searchWeather(){
        fetch(
            "api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=a9be3d064e53eb67f8c76693caefab55"
        )
    
        // need to pass coordinates to forecast api


    .then(response => response.json());
    console.log(response);

// forecast weather api fetch
let forecast = {
    searchForecast() {

    }
}

// dynamically create cards for 4 day forecast
for (var i = 0; i <= 5; i++) {
    console.log(i)
    var card = $('<div')
    card.addClass('col')
    card.attr
    
    )






// search button, saves to local storage
$(".searchBtn").on("click", function (weather) {
    console.log("search button clicked");
    var city = $(this).attr("name");
    
  
    window.localStorage.setItem(city);
    getCity()
  
})

// retrieve search history in local storage
  $(".savedCity").on("click", function (weather) {
    console.log("saved city clicked");
    var city = $(this).attr("data-name");
    
   window.localStorage.setItem(city);
    getCity()

  })

  function getCity() {
    var storage = window.localStorage.getItem(city);
    $(city).text(storage);
  
}}
