import React, { useState, useEffect } from "react";
import "./App.css";
import PBodegas from "./Componentes/Pantallas/P_Bodegas/PBodegas";
import PUsers from "./Componentes/Pantallas/P_Users/PUsers";
import PMateriales from "./Componentes/Pantallas/P_Materiales/PMateriales";
import PPedidos from "./Componentes/Pantallas/P_Pedidos/PPedidos";
import PEmpresa from "./Componentes/Pantallas/P_Empresa/PEmpresa";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Componentes/Home/Home";

const App = () => {
  return (
    <PBodegas />
  );
};

export default App;
