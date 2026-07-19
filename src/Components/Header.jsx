import React from 'react'
import logo from "../assets/logo.png";
function Header(){
  return (
    <header>
      <img src={logo} alt="Logo" width="120" />
    <h1>Dream Basket</h1>
    </header>

  );
}

export default Header;