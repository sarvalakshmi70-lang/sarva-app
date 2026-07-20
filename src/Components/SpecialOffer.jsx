import React from 'react'

function SpecialOffer() {
  function offer(){
    alter("offer applied sucessfully");
  }
  return (
    <section onClick ={offer}>
      <h2>Today's Offer</h2>
      <p>Buy Two Cupcake Get 1 Free!</p>
    </section>
  );
}

export default SpecialOffer;