import CakeCard from "./CakeCard";

import chocolate from "../assets/chocolate.png";
import strawberry from "../assets/strawberry.png";
import blackforest from "../assets/blackforest.png";
import brownie from "../assets/brownie.png";

function CakeList() {
  function viewCakes() {
    alert("Here are our best-selling cakes!");
  }

  return (
    <section>
      <h2>Our Best Sellers</h2>

      <button onClick={viewCakes}>
        View All Cakes
      </button>

      <CakeCard
        image={chocolate}
        name="Chocolate Cake"
        price="450"
      />

      <CakeCard
        image={strawberry}
        name="Strawberry Cake"
        price="550"
      />

      <CakeCard
        image={blackforest}
        name="Black Forest Cake"
        price="120"
      />

      <CakeCard
        image={brownie}
        name="Brownie"
        price="90"
      />
    </section>
  );
}

export default CakeList;
