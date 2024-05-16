const option ={
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ce580959b4msh04ac7f304c1ee24p143e88jsncf6cf022f1d6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  }
};

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi", option)
	.then(response => response.json())
	.then((response) => {
		console.log(response);

		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response. feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => {console.log(err)});
}

submit.addEventListener("click", (city) => {
	getWeather(city.value);
});

getWeather("delhi");