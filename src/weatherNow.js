import React from "react";
export default function weatherNow() {
  return (
    <>
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <nav class="navbar navbar-light bg-light">
              <div class="container-search">
                <a class="navbar-brand"></a>
                <form class="search-form" id="search-form">
                  <input
                    class="searchInput"
                    type="search"
                    name="city"
                    id="city-input"
                    placeholder="Enter a city"
                    autocomplete="off"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
                <button
                  class="btn btn-success w-300"
                  id="current-location-button"
                >
                  Current
                </button>
              </div>
            </nav>
            <div class="weatherNow">
              <h1 id="city">New York</h1>
              <div class="overview">
                <li id="date">Tuesday, 04:11 pm</li>
                <li id="description">scattered clouds</li>
              </div>
            </div>
            <div class="col-6">
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt="scattered clouds"
                id="icon"
                class="float-left"
              />
              <span class="weather-temperature" id="temperature">
                71
              </span>
              <span class="units">
                <a href="#" id="fahrenheit-link" class="active">
                  °F
                </a>
                |
                <a href="#" id="celcius-link">
                  °C
                </a>
              </span>
            </div>
            <div class="col-4">
              <ul id="wind-humid">
                <li>
                  Wind: <span id="wind">12</span> mph
                </li>
                <li>
                  Humidty: <span id="humidity">42</span>%
                </li>
              </ul>
            </div>
          </div>
          <div class="weather-forecast" id="forecast">
            <div class="row">
              <div class="col-2">
                <div class="weather-forecast-date">Tue</div>

                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  width="42"
                />
                <div class="weather-forecast-temperatures">
                  <span class="weather-forecast-temperature-max"> 71° </span>
                  <span class="weather-forecast-temperature-min"> 49° </span>
                </div>
              </div>

              <div class="col-2">
                <div class="weather-forecast-date">Wed</div>

                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  width="42"
                />
                <div class="weather-forecast-temperatures">
                  <span class="weather-forecast-temperature-max"> 68° </span>
                  <span class="weather-forecast-temperature-min"> 53° </span>
                </div>
              </div>

              <div class="col-2">
                <div class="weather-forecast-date">Thu</div>

                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  width="42"
                />
                <div class="weather-forecast-temperatures">
                  <span class="weather-forecast-temperature-max"> 77° </span>
                  <span class="weather-forecast-temperature-min"> 58° </span>
                </div>
              </div>

              <div class="col-2">
                <div class="weather-forecast-date">Fri</div>

                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  width="42"
                />
                <div class="weather-forecast-temperatures">
                  <span class="weather-forecast-temperature-max"> 65° </span>
                  <span class="weather-forecast-temperature-min"> 53° </span>
                </div>
              </div>

              <div class="col-2">
                <div class="weather-forecast-date">Sat</div>

                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  width="42"
                />
                <div class="weather-forecast-temperatures">
                  <span class="weather-forecast-temperature-max"> 68° </span>
                  <span class="weather-forecast-temperature-min"> 46° </span>
                </div>
              </div>

              <div class="col-2">
                <div class="weather-forecast-date">Sun</div>

                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt=""
                  width="42"
                />
                <div class="weather-forecast-temperatures">
                  <span class="weather-forecast-temperature-max"> 56° </span>
                  <span class="weather-forecast-temperature-min"> 38° </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <li id="finalLink">
          <small></small>
          <a
            href="https://github.com/Yamilexkiara/my-shecodes-project"
            target="_blank"
          >
            Open-source code
          </a>
          by Yamilex Ortiz
        </li>
      </div>
    </>
  );
}
