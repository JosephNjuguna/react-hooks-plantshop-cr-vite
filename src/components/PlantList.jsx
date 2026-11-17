import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {  
  return (
    <ul className="cards">
      {plants.map(plantData => (
        <PlantCard key={plantData.id} plant={plantData}/>
      ))}
    </ul>
  );
}

export default PlantList;
