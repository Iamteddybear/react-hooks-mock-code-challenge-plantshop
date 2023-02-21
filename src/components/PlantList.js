import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantArr, handleUpdatePrice, handleDeletePlant }) {
  return (
    <ul className="cards">
      {plantArr.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          handleUpdatePrice={handleUpdatePrice}
          deletePlant={handleDeletePlant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
