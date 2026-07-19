import React from 'react';
import CakeCard from './CakeCard';
import logo from "../assets/logo.png";
import chocolate from "../assets/chocolate.png";
import strawberry from "../assets/strawberry.png";
import blackforest from "../assets/blackforest.png";
import brownie from "../assets/brownie.png";
function CakeList() {
  return (
    <section>
      <h2>Our Best Sellers</h2>
      <CakeCard image={chocolate} name="Chocolate Cake" price={50} />
      <CakeCard image={strawberry} name="Strawberry Cake" price={80} />
      <CakeCard image={blackforest} name="Black Forest" price={90} />
      <CakeCard image={brownie} name="Brownie" price={100} />
    </section>
  );
}

export default CakeList;