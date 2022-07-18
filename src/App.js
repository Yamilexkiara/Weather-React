import Searchbar from "./Searchbar";
import WeatherNow from "./WeatherNow";
import Temps from "./Temps";
import Footer from "./Footer";
import "./App.css";
export default function App() {
  return (
    <>
      <div className="App">
        <Searchbar />
        <WeatherNow />
      </div>
      <Temps />
      <Footer />
    </>
  );
}
