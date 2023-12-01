import React from "react";
import logoUrl from '../../assets/logo.png';
import './Header.css'

const Header = () => {
  return (
    <header>
      <img src={logoUrl} alt="Cloud logo" />
      <h1>Weather Info</h1>
    </header>
  )
};

export default Header;
