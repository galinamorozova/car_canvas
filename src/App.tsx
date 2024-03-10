import React from 'react';
import './App.css';
import Canvas from "./components/canvas/Canvas";
import {Typography} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Typography variant="h4">
          Отображение данных о нарушении ПДД
          </Typography>
      </header>
        <Canvas/>
    </div>
  );
}

export default App;
