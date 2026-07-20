import React from "react";

function Contact() {

  function handleLocation() {
    alert("Our location: Chennai, Tamil Nadu");
  }

  function handlePhone() {
    alert("Calling Dream Basket...");
  }

  function handleEmail() {
    alert("Opening email...");
  }

  return (
    <section>
      <h2>Contact Us</h2>

      <p onClick={handleLocation} style={{ cursor: "pointer" }}>
        📍 Location
      </p>

      <p onClick={handlePhone} style={{ cursor: "pointer" }}>
        📞 8015340152
      </p>

      <p onClick={handleEmail} style={{ cursor: "pointer" }}>
        DreamBasket@gmail.com
      </p>
    </section>
  );
}

export default Contact;