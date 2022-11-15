import React from "react";
import { Route, Routes  } from "react-router-dom";
import PantallaAsientos from './PantallaAsientos';
import Home from "./Home";
import Tarifas from "./componentes/Tarifas";
import Login from "./componentes/Login";
import './App.css';

function App() {
  return (
      <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/componentes/Tarifas.jsx" element={<Tarifas />}></Route>
        <Route path="/componentes/Login.jsx" element={<Login />}></Route>
        <Route path="/PantallaAsientos" element={<PantallaAsientos />} />
      </Routes>
       
      </div>
       

  );
}

export default App;
