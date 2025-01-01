
# Weather Dashboard 🌤️

A sleek and interactive weather dashboard that provides real-time weather updates for your chosen city and forecasts for upcoming days. This project is designed for simplicity and usability.

## Features

- **Real-time Weather Data:** Displays current temperature, humidity, wind speed, and pressure.
- **5-Day Forecast:** Shows a brief weather forecast for the next five days.
- **Dynamic UI:** Updates weather details dynamically with no page reloads.
- **Search by City:** Enter a city name to get instant weather details.

## Technologies Used

- **HTML5**: Markup structure.
- **CSS3**: Styling with a clean, modern look.
- **JavaScript**: Handles API integration and dynamic updates.
- **OpenWeatherMap API**: Fetches weather and forecast data.

## How It Works

1. **Search for a City:** Enter a city name in the search box.
2. **View Weather Details:** Instantly view weather information for the entered city.
3. **Forecast:** Access the next five days' forecast below the current weather details.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, etc.)
- A text editor (e.g., VS Code) for optional code exploration.

### Setup Instructions

1. Clone this repository or download the files as a ZIP.
2. Open the project folder.
3. Replace the `apiKey` in `app.js` with your OpenWeatherMap API key. Sign up at [OpenWeatherMap](https://openweathermap.org/) to get your free API key.
4. Open `index.html` in your browser to use the application.

### Example API Key Update in `app.js`
```javascript
const apiKey = "your_openweathermap_api_key"; // Replace with your API key
```

## File Structure

```plaintext
weather-dashboard/
├── index.html         # Main HTML structure
├── style.css          # Styling for the dashboard
├── app.js             # JavaScript for API integration and dynamic updates
└── README.md          # Project documentation
```
