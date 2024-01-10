 // Plant.js
import React from 'react';

const Plant = ({ name, health, onWater, onFertilize }) => {
  return (
    <div className="plant">
      <h2>{name}</h2>
      <p>Health: {health}</p>
      <button onClick={onWater}>Water</button>
      <button onClick={onFertilize}>Fertilize</button>
    </div>
  );
};

export default Plant;
