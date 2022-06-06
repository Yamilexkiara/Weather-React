import React from `react`;
export default function weatherNow() {
  return (
    <>
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <nav className="navbar navbar-light bg-light">
              <div className="container-search">
                <a className="navbar-brand"></a>
                <form className="search-form" id="search-form">
                  <input
                    className="searchInput"
                    type="search"
                    name="city"
                    id="city-input"
                    placeholder="Enter a city"
                    autocomplete="off"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
                <button
                  className="btn btn-success w-300"
                  id="current-location-button"
                >
                  Current
                </button>
              </div>
            </nav>
            <div className="weatherNow">
              <h1 id="city">New York</h1>
              <div className="overview">
                <li id="date">Tuesday, 04:11 pm</li>
                <li id="description">scattered clouds</li>
              </div>
            </div>
            <div className="col-6">
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                alt="scattered clouds"
                id="icon"
                className="float-left"
              />
              <span className="weather-temperature" id="temperature">
                71
              </span>
              <span className="units">
                <a href="#" id="fahrenheit-link" class="active">
                  °F
                </a>
                |
                <a href="#" id="celcius-link">
                  °C
                </a>
              </span>
            </div>
            <div className="col-4">
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
          <div className="weather-forecast" id="forecast">
            <div className="row">
              <div className="col-2">
                <div className="weather-forecast-date">Tue</div>

                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  width="42"
                />
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max">
                    {" "}
                    71°{" "}
                  </span>
                  <span className="weather-forecast-temperature-min">
                    {" "}
                    49°{" "}
                  </span>
                </div>
              </div>

              <div className="col-2">
                <div className="weather-forecast-date">Wed</div>

                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  width="42"
                />
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max">
                    {" "}
                    68°{" "}
                  </span>
                  <span className="weather-forecast-temperature-min">
                    {" "}
                    53°{" "}
                  </span>
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
                  <span className="weather-forecast-temperature-max">
                    {" "}
                    77°{" "}
                  </span>
                  <span className="weather-forecast-temperature-min">
                    {" "}
                    58°{" "}
                  </span>
                </div>
              </div>

              <div className="col-2">
                <div className="weather-forecast-date">Fri</div>

                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
                  width="42"
                />
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max">
                    {" "}
                    65°{" "}
                  </span>
                  <span className="weather-forecast-temperature-min">
                    {" "}
                    53°{" "}
                  </span>
                </div>
              </div>

              <div className="col-2">
                <div className="weather-forecast-date">Sat</div>

                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  width="42"
                />
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max">
                    {" "}
                    68°{" "}
                  </span>
                  <span className="weather-forecast-temperature-min">
                    {" "}
                    46°{" "}
                  </span>
                </div>
              </div>

              <div className="col-2">
                <div className="weather-forecast-date">Sun</div>

                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt=""
                  width="42"
                />
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max">
                    {" "}
                    56°{" "}
                  </span>
                  <span className="weather-forecast-temperature-min">
                    {" "}
                    38°{" "}
                  </span>
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
