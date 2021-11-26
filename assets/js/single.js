// Search Button
var 


// City Weather API fetch
var weather = {searchWeather(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city +        
        "&units=imperial&appid=a9be3d064e53eb67f8c76693caefab55");
        //console.log(city);
        
    then(response = response.json())
    // console.log(response)
},

// Coordinates from API
var weatherCoord =
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" +lat + "&lon=" + lon + "&units=imperial&appid=a9be3d064e53eb67f8c76693caefab55");   
    // console.log(lat);
    // console'log(lon);
}


// create 5 day forecast
var weatherForecast = function(data) {
    var dailyForecast=data.daily;
    //loop through days while creating card elements
    for (var i = 0; i <= 5; i++) {
        var icon=dailyForecast[i].weather[0].icon;
        var temp=dailyForecast[i].temp.day;
        var wind=dailyForecast[i].wind_speed;
        var humidity=dailyForecast[i].humidity;
        var displayIcon=document.querySelector("#day-" + [i]);
        displayIcon.src="https://openweathermap.org/img/wn/" + icon + "@2x.png";
        var displayTemp=document.querySelector("#")



    var card = $('<div>')
    card.addClass('col')*/

   
 
// search button saves to local storage
$(".searchBtn").on("click", weather);
    console.log("search button clicked");
    var city = $(this).attr("name");
      
    window.localStorage.setItem(city);
    getCity();
}

/*document.getElementByClass("theBtn").addEventListener("click", weather);
element.addEventListener("click", myFunction);
element.addEventListener("cl

function myFunction() {
  alert ("Hello World!");
}*/

// retrieve search history in local storage
  /*$(".savedCity").on("click", weather),
    //console.log("saved city clicked"),
    var city = $(this).attr("data-name",
    
   window.localStorage.setItem(city);
    getCity();

  }*/

  /*function getCity() {
    var storage = window.localStorage.getItem(city);
    $(city).text(storage);
  }*/
}}}