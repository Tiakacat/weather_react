import React from "react";
import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherNow.css";

export default function WeatherNow(props) {
  return (
    <div className="dataContainer">
      <div className="myCity">
        <h2 className="text-uppercase">{props.info.name}</h2>
        <h3>
          <DisplayDate date={props.info.date} />
        </h3>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="cityData">
            <h4>
              <b>TEMP:</b> <br />
              day/night
            </h4>
            <span className="temp-day">
              {Math.round(props.info.temperature_max)}/
            </span>

            <span className="temp-night">
              {Math.round(props.info.temperature_min)}
            </span>
            <div className="units">
              <a href="/">°C</a>
              <a href="/">°F</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="cityData">
            <h4>
              <b>SKY</b>:<br />
            </h4>
            <WeatherIcon icon={props.info.icon} size={60} width={70} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="cityData">
            <h4>
              <b>WIND: </b>
              <br />
              {Math.round(props.info.wind)} km/h
            </h4>
            <img src="/images/wind.png" width="60px" alt="wind_icon" />
          </div>
        </div>
        <div className="col-3">
          <div className="cityData">
            <h4>
              <b>HUMI: </b>
              <br />
              {props.info.humidity} %
            </h4>
            <img src="/images/droplets.png" width="60px" alt="humid_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
