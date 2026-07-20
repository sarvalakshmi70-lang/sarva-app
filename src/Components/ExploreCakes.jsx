import React from 'react'

function ExploreCakes() {
  function showcakes(name){
    alter(name);
    alter("Welcome to Dream Basket")
  }
  return (
    <section>
      <h2>Categories</h2>

      <button onMouseOver={() => showCategory("Cakes")}> Cakes</button>

      <button onMouseOver={() => showCategory("Cupcakes")}> Cupcakes</button>

      <button onMouseOver={() => showCategory("Donuts")}> Donuts</button>

      <button onMouseOver={() => showCategory("Browine")}>Brownie</button>
    </section>
  );
}

export default ExploreCakes;