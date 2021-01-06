//tags which connect api to the html page, making it functional
var displayWeather=$("#displayCurrentWeather")
var displayCityName=$("#cityName")
var searchButton=$("#searchButton")
var weatherKey = "a981bce248de193947ea501f144b9872";
function searchWeather(city){



  var queryURL="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+weatherKey
  $.ajax({
    type:"GET",
    url:queryURL
  }).then(function(response){

    //displays city name after search, then temp, humidity and wind
    var cityName=response.name
var temp=response.main.temp
var humidity=response.main.humidity
var wind=response.wind.speed

//temperature conversion from kelvin as well as the api 
temp=convertKelvin(temp)

// this displays the temp, humidity and wind speed on the page
temp="Temperature: "+temp +"<br>"
humidity="Humidity Percentage: "+humidity +"<br>"
wind="Wind Speed: "+wind 
displayCityName.text(cityName)
displayWeather.append(temp,humidity,wind)
  })
 }

 //this makes the search button fetch the weather data from desired city
 searchButton.on("click", function(){
  var cityInput=$("#cityInput").val()
  searchWeather(cityInput)
 })

 // Converts kelvin into fahrenheit
 let convertKelvin = (kelvin) => {
  return parseInt(((((kelvin) - 273.15) * 1.8) + 32));
  }