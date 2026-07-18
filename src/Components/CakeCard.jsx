function CakeCard({ image, name, price }) {
  return (
    <section className="card">
      <img src={image} alt={name} width="200" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button>Buy Now</button>
    </section>
  );
}

export default CakeCard;