import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./App.css";
export default function WeatherNow(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "4c44a8e9b1dcd5f7069fde1bbd1dfd12";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="weatherNow">
        <div className="container">
          <div className="weather-app">
            <nav className="navbar">
              <div className="container-search">
                <a href="navbar-brand">{""}</a>
                <form
                  className="search-form"
                  id="search-form"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="searchInput"
                    type="search"
                    name="city"
                    id="city-input"
                    placeholder="Enter a city"
                    autocomplete="off"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    value="Search"
                  >
                    Search
                  </button>
                  <button
                    className="btn btn-success w-300"
                    id="current-location-button"
                  >
                    Current
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
