import React from "react";
export default function Temps() {
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row">
        <div className="col-2">
          <div className="weather-forecast-date">Sat</div>

          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 69° </span>
            <span className="weather-forecast-temperature-min"> 51° </span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forecast-date">Sun</div>

          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 50° </span>
            <span className="weather-forecast-temperature-min"> 43° </span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forecast-date">Mon</div>

          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 51° </span>
            <span className="weather-forecast-temperature-min"> 42° </span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forecast-date">Tue</div>

          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 52° </span>
            <span className="weather-forecast-temperature-min"> 41° </span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forecast-date">Wed</div>

          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 60° </span>
            <span className="weather-forecast-temperature-min"> 44° </span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forecast-date">Thu</div>

          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 64° </span>
            <span className="weather-forecast-temperature-min"> 51° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
