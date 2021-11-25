
//(api.openweathermap.org/data/2.5/weather?q=cityName&appid=a9be3d064e53eb67f8c76693caefab55)

$(".searchBtn").on("click", function () {
    console.log("search button clicked");
    var city = $(this).attr("data-name");
    var task = $(this).siblings('textarea').val()
  
    window.localStorage.setItem(city);
    getTasks()
  
  })