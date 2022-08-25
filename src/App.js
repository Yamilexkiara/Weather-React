import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Temps from "./Temps";
import WeatherNow from "./WeatherNow";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <header className="App-header">
          <WeatherNow defaultCity="New York" />

          <Temps />
        </header>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
