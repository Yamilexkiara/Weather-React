import React from "react";
export default function Searchbar() {
  return (
    <div className="container">
      <div className="weather-app">
        <nav className="navbar navbar-light bg-light">
          <div className="container-search">
            {""}
            <a href="navbar-brand">{""}</a>
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
      </div>
    </div>
  );
}
