import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}° F`
    );
  }
  let apiKey = "bd3bb6534458ba51b48c49f5155745b6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}k&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
