const apiKey = '3cd2236eeed9ba7dcc6cc997c72011ab'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'; 

// Function to convert K to F
function kelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9/5 + 32).toFixed(2); 
}


async function fetchWeather() {
    const city = document.getElementById('cityInput').value; 
    const url = `${apiUrl}?q=${city},US&appid=${apiKey}`; 

    try {
        const response = await fetch(url);
        const data = await response.json();

        
        const highTemp = kelvinToFahrenheit(data.main.temp_max);
        const lowTemp = kelvinToFahrenheit(data.main.temp_min);
        const forecast = data.weather[0].main;
        const humidity = data.main.humidity;

        
        document.getElementById('temperature').innerHTML = `High: ${highTemp}°F, Low: ${lowTemp}°F`;
        document.getElementById('forecast').innerHTML = `Forecast: ${forecast}`;
        document.getElementById('humidity').innerHTML = `Humidity: ${humidity}%`;
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    }
    const unsplashApiKey = 'rPGArPRIq9JevHVwP90rPAhVKY_FSF8HTS2_YWZP1B4';
    const unsplashApiUrl = 'https://api.unsplash.com/search/photos';

    // upsplash image 
    fetch(`${unsplashApiUrl}?query=${city}&client_id=${unsplashApiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const imageUrl = data.results[0].urls.regular;
                document.getElementById('cityImage').src = imageUrl; 
            } else {
                console.log('No images found for this city on Unsplash');
            }
        })
        .catch(error => {
            console.error('Failed to fetch city image from Unsplash:', error);
    });
}
