import React from "react";
import './WeatherCard.css';

const WeatherCard = ({ temp, weather, icon, date, timeframe }) => {

  let bg;
  const setBg = () => {
    if (icon == '01d') {
      bg = '#B9E3F390';
    } else if (icon == '01n') {
      bg = '#0C354590'
    } else if (icon.startsWith('02') || icon.startsWith('03') || icon.startsWith('04')) {
      bg = '#9AACA290';
    } else if (icon.startsWith('13')) {
      bg = '#EEF8FC90';
    } else if (icon.startsWith('14')) {
      bg = '#8BA7A490';
    } else {
      bg = '#5E646E90';
    }
  }
  setBg();

  return (
    <li className="card">
      <div style={{backgroundColor:bg}}>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={`${weather} icon`} />
        <h1>{temp} °C</h1>
        <h2>{weather}</h2>
        <p>{date}</p>
        <p>{timeframe}</p>
      </div>
    </li>
  );
};

export default WeatherCard;
