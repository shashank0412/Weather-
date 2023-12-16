
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cc515729b4msh967ac529fed8300p1d70c7jsn3c676d99f64e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => 
   { cityName.innerHTML = city
    const response =  fetch(url, options);
    const result = response.text();
            {

            //Cloud_pct.innerHTML = reponse.Cloud_pct
            feels_like.innerHTML = reponse.feels_like
            max_temp.innerHTML = reponse.max_temp
            min_temp.innerHTML = reponse.min_temp
            humidity.innerHTML = reponse.humidity
            humidity2.innerHTML = reponse.humidity2
            sunset.innerHTML = reponse.sunset
            sunrise.innerHTML = reponse.sunrise
            wind_degrees.innerHTML = reponse.wind_degrees
            temp.innerHTML = reponse.temp
            temp2.innerHTML = reponse.temp2
            weather_id.innerHTML = reponse.weather_id
            wind_speed.innerHTML = reponse.wind_speed
            wind_degrees2.innerHTML = reponse.wind_degrees2
            
        
   }
    console.log(result)
    .catch(error = console.error(error));

}
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        getWeather(city.value)
    })

    getWeather("Delhi")


    