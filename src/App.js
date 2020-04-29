import React from 'react';
import './App.css';
import Forecast from "./Components/Forecast/Forecast";


function App() {
  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
      <Forecast />
      </main>
      <footer>
      created by @kanhaiyarathi
      </footer>
    </div>
  );
}

export default App;
