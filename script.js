const option ={
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ce580959b4msh04ac7f304c1ee24p143e88jsncf6cf022f1d6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  }
};
const getWeather = (city) => {
	city_name.innerHTML = city;
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city, option)
	.then(response => response.json())
	.then((response) => {
		console.log(response);

		temp.innerHTML	= response.temp;
		temp2.innerHTML	= response.temp;
		max_temp.innerHTML = response.max_temp;
		min_temp.innerHTML = response.min_temp;

		cloud_pct.innerHTML = response.cloud_pct;
		feels_like.innerHTML =	response.feels_like;
		humidity.innerHTML = response.humidity;
		humidity2.innerHTML = response.humidity;
		
		sunrise.innerHTML = response.sunrise;
		sunset.innerHTML = response.sunset;
		wind_degrees.innerHTML = response.wind_degrees;
		wind_speed.innerHTML = response.wind_speed;
		wind_speed2.innerHTML = response.wind_speed;
	})
	.catch(err => {console.log(err)});
}
window.onload = function(){
	submit.addEventListener("click", (e) => {
		e.preventDefault();
		getWeather(city.value);
	});
    getWeather("Delhi");
}