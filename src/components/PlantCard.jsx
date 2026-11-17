import React,{useState} from "react";

function PlantCard({plant}) {
  const [available, setAvailable] = useState(true)
  function updateStock() {
    setAvailable(false)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {available ? (
        <button className="primary" onClick={updateStock}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
