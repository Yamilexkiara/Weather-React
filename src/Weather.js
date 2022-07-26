import React from "react";
import axios from "axios";
export default function weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}° F`
    )
  }
  let apiKey = "bd3bb6534458ba51b48c49f5155745b6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}kk&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Yamilex</h2>;
}
