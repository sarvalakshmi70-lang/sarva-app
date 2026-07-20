import React from 'react'

function Reviews() {
  function review(){
    AudioListener("Thank you for giving reviews");
  }
  return (
    <section onClick={review}>
        <h2>Customer Reviews</h2>
        <p>⭐ ⭐ ⭐ ⭐ ⭐"Amazing Cakes"</p>
        <p>⭐ ⭐ ⭐ ⭐ ⭐"Best Bakery in Chennai"</p>
    </section>
  );
}

export default Reviews;