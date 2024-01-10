 // ActionButtons.js
import React from 'react';

const ActionButtons = ({ onWaterAll, onFertilizeAll }) => {
  return (
    <div className="action-buttons">
      <button onClick={onWaterAll}>Water All</button>
      <button onClick={onFertilizeAll}>Fertilize All</button>
    </div>
  );
};

export default ActionButtons;
