import { useState } from "react";
import Formulario from "./components/Formulario";
import ListaVehiculos from "./components/ListaVehiculos";
import "./App.css";

function App() {
  const [vehiculos, setVehiculos] = useState([]);

  const agregarVehiculo = (nuevoVehiculo) => {
    if (vehiculos.length >= 10) {
      alert("Estacionamiento lleno (10 cupos).");
      return;
    }
    setVehiculos([...vehiculos, nuevoVehiculo]);
  };

  return (
    <>
      <header>
        <h1>Sistema de Estacionamientos</h1>
      </header>
      <main>
        <Formulario onAgregar={agregarVehiculo} />
        <p>Cupos disponibles: {10 - vehiculos.length}</p>
        <ListaVehiculos vehiculos={vehiculos} />
      </main>
      <footer>
        <p>© 2026 - Evaluación 3</p>
      </footer>
    </>
  );
}

export default App;