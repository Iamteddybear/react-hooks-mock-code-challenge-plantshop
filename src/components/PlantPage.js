import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantArr, setPlantArr] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlantArr(data));
  }, []);

  let filtered = plantArr.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleUpdatePrice = (id, price) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        const updatedPlantArr = plantArr.map((plant) =>
          plant.id === updatedPlant.id ? updatedPlant : plant
        );
        setPlantArr(updatedPlantArr);
      });
  };

  const handleDeletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedPlantArr = plantArr.filter((plant) => plant.id !== id);
        setPlantArr(updatedPlantArr);
      });
  };

  return (
    <main>
      <NewPlantForm plantArr={plantArr} setPlantArr={setPlantArr} />
      <Search setSearch={setSearch} />
      <PlantList
        plantArr={filtered}
        handleUpdatePrice={handleUpdatePrice}
        handleDeletePlant={handleDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
