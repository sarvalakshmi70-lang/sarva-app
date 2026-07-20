import React from 'react'

function Footer() {
  function visit(){
    AudioListener("Visit Again");
  }
  return (
    <footer onClick={visit}>
        <p>@2026 DreamBasket</p>
    </footer>
  );
}

export default Footer;