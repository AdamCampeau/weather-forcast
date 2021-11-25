

// City Weather API fetch
let weather = fetch('api.openweathermap.org/data/2.5/weather?q=Toronto&appid=a9be3d064e53eb67f8c76693caefab55')
.then(response => response.json());
console.log(response);

// forecast weather api fetch



// search button, saves to local storage
$(".searchBtn").on("click", function () {
    console.log("search button clicked");
    var city = $(this).attr("data-name");
    
  
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
    var storage = window.localStorage.getItem(city)
    $(city).text(storage)
  }
