// City Weather API fetch
let weather = {searchWeather(){
        fetch("api.openweathermap.org/data/2.5/weather?q=" 
        + city +
        + lot +
        + lon +
        "&units=metric&appid=a9be3d064e53eb67f8c76693caefab55")
        console.log(city)  
        // pass coordinates to forecast api?

    then(response => response.json());
    console.log(response);

// forecast weather api fetch
let forecast = {
    searchForecast() {

// dynamically create cards for 4 day forecast
/*for (var i = 0; i <= 5; i++) {
    console.log(i)
    var card = $('<div>')
    card.addClass('col')*/
   
 
// search button saves to local storage
$(".searchBtn").on("click", weather);
    console.log("search button clicked");
    var city = $(this).attr("name");
      
    window.localStorage.setItem(city);
    getCity();
}

document.getElementByClass("theBtn").addEventListener("click", weather);
element.addEventListener("click", myFunction);
element.addEventListener("cl

function myFunction() {
  alert ("Hello World!");
}

// retrieve search history in local storage
  $(".savedCity").on("click", weather),
    //console.log("saved city clicked"),
    var city = $(this).attr("data-name",
    
   window.localStorage.setItem(city);
    getCity();

  }

  /*function getCity() {
    var storage = window.localStorage.getItem(city);
    $(city).text(storage);
  }*/
}}}