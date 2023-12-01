import React from "react";
import './WeatherError.css';

const WeatherError = ({ error }) => {
  return <p id="error"> {error} </p>;
};

export default WeatherError;
