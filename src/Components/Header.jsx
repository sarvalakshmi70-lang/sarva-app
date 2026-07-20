import React from 'react'
import logo from "../assets/logo.png";
function Header(){
  function welcome(){
    alter("Welcome to Dream Basket")
  }
  return (
    <header onClick={welcome}>
      <img src={logo} alt="Logo" width="120" />
    <h1>Dream Basket</h1>
    </header>

  );
}

export default Header;