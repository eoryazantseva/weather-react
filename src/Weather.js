import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentWeather from "./CurrentWeather";

export default function Weather() {
  let [city, setCity] = useState("Brisbane");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [picture, setPicture] = useState("");

  function updateCity(event) {
    let updatedSearch = event.target.value;
    let capitalizedSearch = updatedSearch.length
      ? updatedSearch.charAt(0).toUpperCase() + updatedSearch.slice(1)
      : updatedSearch;
    setCity(capitalizedSearch);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "44d61b2c8d129fbac42ddac3d5a2004b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);

    function showWeather(response) {
      setTemperature(response.data.main.temp);
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setPicture(
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
    }
  }

  return (
    <div className="Weather">
      <div className="clearfix mb-3">
        <form className="float-left" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search for a city"
            autoComplete="off"
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="search"
            onClick={updateCity}
          />
        </form>

        <button
          type="submit"
          className="float-left btn btn-success ml-1 "
          value="Current"
        >
          {" "}
          Current location{" "}
        </button>
      </div>

      <CurrentWeather
        city={city}
        temperature={Math.round(temperature)}
        description={description}
        humidity={humidity}
        wind={Math.round(wind)}
        picture={picture}
      />
    </div>
  );
}
