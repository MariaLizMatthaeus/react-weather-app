import React, { useState } from "react";
import axios from "axios";
import "./App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "42b8ba4c0d3eac619d09938449fa1571";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type a city name ..."
        className="form-control border-end-0 border"
        autoComplete="off"
        onChange={updateCity}
      />

      <button className="btn btn-large" type="submit">
        <FontAwesomeIcon icon={solid("search")} />
      </button>
      <button
        type="button"
        className="btn current-location"
        id="current-button"
      >
        <FontAwesomeIcon icon={solid("map-marked")} />
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul className="weatherList">
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Weather description: {weather.description}</li>
          <li>Humidity: {weather.humidity} %</li>
          <li>Wind speed: {Math.round(weather.wind)} km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
