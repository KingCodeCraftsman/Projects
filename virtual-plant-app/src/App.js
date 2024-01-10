/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/orgigina





// App.js
import React, { useState } from 'react';
import PlantList from './components/PlantList';
import ActionButtons from './components/ActionButtons';
import Notifications from './components/Notifications';
import './styles.css';

const App = () => {
  const [plants, setPlants] = useState([
    { id: 1, name: 'Plant 1', health: 80 },
    { id: 2, name: 'Plant 2', health: 60 },
    // Add more plants 
  ]);

  const [notifications, setNotifications] = useState([]);

  const handleWater = (plantId) => {
    // Implement water
    const updatedPlants = plants.map((plant) => {
      if (plant.id === plantId) {
        return { ...plant, health: plant.health + 10 };
      }
      return plant;
    });
    setPlants(updatedPlants);

    // You can also add a notification or perform other actions here
    setNotifications([...notifications, { id: Date.now(), message: `Watered plant ${plantId}` }]);
  };

  const handleFertilize = (plantId) => {
    // Implement fertilize 
  };

  const handleWaterAll = () => {
    //  watering all plants 
  };

  const handleFertilizeAll = () => {
    //  fertilizing all plants 
  };

  return (
    <div className="app">
      <h1>Virtual Plant Care</h1>
      <PlantList plants={plants} onWater={handleWater} onFertilize={handleFertilize} />
      <ActionButtons onWaterAll={handleWaterAll} onFertilizeAll={handleFertilizeAll} />
    </div>
  );
};

export default App;




