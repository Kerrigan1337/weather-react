import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");

  let [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ff29bed3181c3526c35cc5408037f85&units=metric`;
    axios.get(url).then(showTemperature);
    console.log(url);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <p>
        The temperate in {city} is {temperature}
      </p>
    </div>
  );
}
