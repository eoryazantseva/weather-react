import React from "react";
import "./CurrentWeather.css";

export default function(props) {
  return (
    <div className="CurrentWeather">
      <div className="row date-time-location-container">
        <h1>{props.city}</h1>
        <span id="current-date">Fri, 1 October</span>
        <span id="current-time"> 23.00</span>
      </div>

      <div className="row current-weather-container">
        <div className="col-sm-6 d-flex justify-content-start">
          {/* <div className="clearfix"> */}
          <div className="weather-icon">
            <img src={props.picture} alt="" />
          </div>

          <div className="weather-temp pt-2">{props.temperature}</div>

          <div className="weather-units pt-3">°C</div>
          {/* </div> */}
        </div>

        <div className="col-sm-6">
          <div className="weather">{props.description}</div>
          <div className="humidity">
            Humidity: <span id="current-humidity">{props.humidity}</span>%
          </div>
          <div className="wind">
            Wind: <span id="wind-speed">{props.wind}</span> km/h
          </div>
        </div>
      </div>
    </div>
  );
}
