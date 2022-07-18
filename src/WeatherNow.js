import React from "react";
export default function WeatherNow() {
  return (
    <>
      <div className="weatherNow">
        <h1 id="city">New York</h1>
        <div className="overview">
          <li id="date">Saturday, 02:17 pm</li>
          <li id="description">few clouds</li>
        </div>
      </div>
      <div className="col-6">
        <img
          src="http://openweathermap.org/img/wn/02d@2x.png"
          alt="few clouds"
          id="icon"
          className="float-left"
        />
        <span className="weather-temperature" id="temperature">
          68
        </span>
        <span className="units">
          {""}
          <a href="-#" id="fahrenheit-link" className="active">
            {" "}
            {""}
            °F
          </a>
          |
          <a href="-#" id="celcius-link">
            {" "}
            {""}
            °C
          </a>
          {""}
        </span>
      </div>
      <div className="col-4">
        <ul id="wind-humid">
          <li>
            Wind: <span id="wind">15</span> mph
          </li>
          <li>
            Humidty: <span id="humidity">41</span>%
          </li>
        </ul>
      </div>
    </>
  );
}
