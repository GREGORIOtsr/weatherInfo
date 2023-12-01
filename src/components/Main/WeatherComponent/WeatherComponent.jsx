import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import WeatherList from "./WeatherList";
import WeatherForm from "./WeatherForm";
import WeatherError from "./WeatherError";

const WeatherComponent = () => {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState('');
  const [error, setError] = useState('');

  const currentPos = async () => {
    navigator.geolocation.getCurrentPosition( async (pos, err) => {
      if (err) {
        setError("Could not access user's current location.");
      } else {
        const posRef = await axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&limit=1&appid=${import.meta.env.VITE_API_KEY}`);
        setCity(posRef.data[0].name);
      };
    });
  };

  useEffect(() => {
    currentPos();
  }, []);

  useEffect(() => {
    async function fetchWeather() {
      try {
        let weather = [];
        const posRes = await axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_API_KEY}`
        );
        const pos = posRes.data[0];
        if (!pos) {
          setCity("");
          setWeather('');
          setError(`${city} could not be found.`);
          return;
        } else {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${pos.lat}&lon=${pos.lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
          );
          for (let i = 0; i < 8; i++) {
            let w = res.data.list[i];
            let obj = {
              temp: Math.round(Number(w.main.temp)),
              weather: w.weather[0].main,
              icon: w.weather[0].icon,
              date: w.dt_txt.slice(0, 10),
              timeframe: w.dt_txt.slice(11) + ' - ' + res.data.list[i+1].dt_txt.slice(11),
            };
            weather = [...weather, obj];
          }
          const data = { city: pos.name, results: weather };
          setError("");
          setWeather(data);
        }
      } catch (e) {
        setCity("");
        setWeather('');
      }
    }

    fetchWeather();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[a-z\s]*$/gi;
    const city = e.target.city.value;
    if (regex.test(city)) {
      setCity(city);
      setError("");
    } else {
      setCity("");
      setWeather('');
      setError("Input must contain only letters.");
    }
  };

  return (
    <section>
      <WeatherForm handleSubmit={handleSubmit} currentPos={currentPos}/>
      { error ? <WeatherError error={error} /> : '' }
      { weather ? <WeatherList weather={weather}/> : ''}
    </section>
  );
};

export default WeatherComponent;
