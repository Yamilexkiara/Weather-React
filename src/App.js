import React from "react";
import Searchbar from "./Searchbar";
import Temps from "./Temps";
import WeatherNow from "./WeatherNow";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Searchbar />
        <WeatherNow />

        <Temps />
        <Footer />
      </header>
    </div>
  );
}

export default App;
