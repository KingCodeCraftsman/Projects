 // PlantList.js
import React from 'react';
import Plant from './Plant';

const PlantList = ({ plants, onWater, onFertilize }) => {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <Plant
          key={plant.id}
          name={plant.name}
          health={plant.health}
          onWater={() => onWater(plant.id)}
          onFertilize={() => onFertilize(plant.id)}
        />
      ))}
    </div>
  );
};

export default PlantList;
