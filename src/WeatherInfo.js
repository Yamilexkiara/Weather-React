import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul id="formatteddate">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div>
            <WeatherIcon code={props.data.icon} />
            <span className="weather-temperature" id="temperature">
              {Math.round(props.data.temperature)}
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
        </div>
        <div className="col-4">
          <ul id="wind-humid">
            <li>
              Precipitation: <span id="precipitation">{props.data.rain}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span> mph
            </li>
            <li>
              Humidty: <span id="humidity">{props.data.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
