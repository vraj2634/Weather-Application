var apiKey = "416a3a084dc586e29c3e2a217d0b87f1";
const url = `https://api.openweathermap.org/data/2.5/weather?unit=metric&`;
var cityInput = document.querySelector('.search input');
var button = document.querySelector('.search button');
var weathericon=document.querySelector('.weather-icon');

async function weather(city) {
    const response = await fetch(`${url}q=${city}&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

	if(data.weather[0].main=="Clouds"){
        weathericon.src="images/clouds.png";
	}else if(data.weather[0].main=="Clear"){
		weathericon.src="images/clear.png";
	}else if(data.weather[0].main=="Rain"){
		weathericon.src="images/rain.png";
	}else if(data.weather[0].main=="Mist"){
		weathericon.src = "images/mist.png";
	}else if(data.weather[0].main=="Snow"){
		weathericon.src = "images/snow.png";
	}else if(data.weather[0].main=="Drizzle"){
		weathericon.src = "images/drizzle.png";
	}else if(data.weather[0].main=="Humidity"){
		weathericon.src = "images/humidity.png";
	}
document.querySelector(".weather").style.display="block";
}

function handleEnterKeyPress(event) {
    if (event.keyCode === 13) {
        weather(cityInput.value);
    }
}

button.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    weather(cityInput.value);
});

cityInput.addEventListener("keypress", handleEnterKeyPress);
