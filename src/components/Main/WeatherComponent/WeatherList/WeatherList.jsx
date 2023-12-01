import React from "react";
import { v4 as uuidv4 } from "uuid";
import WeatherCard from "./WeatherCard";
import './WeatherList.css'

const WeatherList = ({ weather }) => {

  const paintWeather = () => {
    return weather.results.map(w => (
      <WeatherCard
        key={uuidv4()}
        temp={w.temp}
        weather={w.weather}
        icon={w.icon}
        date={w.date}
        timeframe={w.timeframe}
      />
    ));
  };

  return (
    <section>
      <h1 id="cityResult">{weather.city}</h1>
      <div>
        <ul id="weatherList">{ paintWeather() }</ul>
      </div>
    </section>
  );
};

export default WeatherList;
