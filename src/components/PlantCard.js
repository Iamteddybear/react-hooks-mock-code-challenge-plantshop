import React, { useState } from "react";

function PlantCard({ plant, deletePlant, handleUpdatePrice }) {
  const [inStock, setInStock] = useState(true);
  const [price, setPrice] = useState(plant.price);

  const handleDelete = () => {
    deletePlant(plant.id);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    handleUpdatePrice(plant.id, e.target.value);
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>
        Price:
        <input type="number" value={price} onChange={handlePriceChange} />
      </p>
      {inStock ? (
        <button onClick={() => setInStock(false)} className="primary">
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
