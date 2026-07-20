function CakeCard({ image, name, price }) {
  function handleClick() {
    alert("You selected " + name);
  }

  return (
    <section className="card">
      <img src={image} alt={name} width="200" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleClick}>Buy Now</button>
    </section>
  );
}

export default CakeCard;