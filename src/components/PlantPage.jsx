import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch plants data');
        }
        return res.json();
      })
      .then((data) => {
        setPlants(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((newsetplant) => [...newsetplant, newPlant])
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
