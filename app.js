const apiKey = "f2457be3c73bec700762287284309772";

document.getElementById("searchBtn").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;

    if (city.trim() === "") {
        alert("Please enter a city name!");
        return;
    }

    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const [weatherResponse, forecastResponse] = await Promise.all([
            fetch(weatherApiUrl),
            fetch(forecastApiUrl),
        ]);

        if (!weatherResponse.ok || !forecastResponse.ok) {
            throw new Error("City not found!");
        }

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        updateWeatherUI(weatherData);
        updateForecastUI(forecastData);
    } catch (error) {
        alert(error.message);
    }
});

function updateWeatherUI(data) {
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("currentDate").textContent = `Date: ${new Date().toLocaleDateString("en-US")}`;
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp|Number} °C`;
    document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("windSpeed").textContent = `Wind Speed: ${data.wind.speed} km/h`;
    document.getElementById("pressure").textContent = `Pressure: ${data.main.pressure} hPa`;
}

function updateForecastUI(data) {
    const forecastContainer = document.getElementById("forecastContainer");
    forecastContainer.innerHTML = ""; // Clear previous forecasts

    const dailyForecasts = data.list.filter((entry) => entry.dt_txt.includes("12:00:00"));

    dailyForecasts.forEach((forecast) => {
        const date = new Date(forecast.dt_txt).toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
        });

        const forecastCard = document.createElement("div");
        forecastCard.classList.add("forecast-card");

        forecastCard.innerHTML = `
            <h4>${date}</h4>
            <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="Weather Icon">
            <p>${forecast.weather[0].description}</p>
            <p>Temp: ${forecast.main.temp|Number}°C</p>
        `;

        forecastContainer.appendChild(forecastCard);
    });
}
