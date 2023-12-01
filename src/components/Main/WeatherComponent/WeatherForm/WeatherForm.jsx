import React from "react";
import iconUrl from '../../../../assets/search.png';
import './WeatherForm.css';

const Form = ({ handleSubmit, currentPos }) => {
  return (
    <section>
      <form onSubmit={handleSubmit} id="cityForm">
        <label htmlFor="city">Search the weather from any city</label>
        <div>
          <input type="text" name="city" placeholder="City"/>
          <button type="submit"><img src={iconUrl} alt="Search icon"/></button>
        </div>
      </form>
      <button onClick={currentPos} id="posBtn">Current Location</button>
    </section>
  )
};

export default Form;
