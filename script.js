document.getElementById("getWeather").addEventListener("click", async () => {
    const city = document.getElementById("city").value;
    const weatherResult = document.getElementById("weatherResult");
  
    if (!city) {
      weatherResult.textContent = "Please enter a city name.";
      return;
    }
  
    try {
      const response = await fetch(`/weather?city=${city}`);
      if (!response.ok) throw new Error("Failed to fetch weather data");
  
      const weatherData = await response.json();
      const temp = weatherData.currentConditions.temp;  // Adjust according to API response
      const conditions = weatherData.currentConditions.conditions;  // Adjust according to API response
      weatherResult.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Conditions: ${conditions}</p>
      `;
    } catch (error) {
      console.error(error);
      weatherResult.textContent = "Could not retrieve weather data. Try again.";
    }
  });
  