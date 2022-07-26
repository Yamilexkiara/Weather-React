import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "./Searchbar";
import Temps from "./Temps";
import WeatherNow from "./WeatherNow";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <header className="App-header">
          <Searchbar />
          <WeatherNow />

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
