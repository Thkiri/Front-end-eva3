import { useState } from "react";
import Formulario from "./components/Formulario";
import ListaVehiculos from "./components/ListaVehiculos";
import "./App.css";

function App() {
  const [vehiculos, setVehiculos] = useState(() => {
    const data = localStorage.getItem("vehiculos");
    return data ? JSON.parse(data) : [];
  });

  const agregarVehiculo = (nuevoVehiculo) => {
    if (vehiculos.length >= 10) {
      alert("Estacionamiento lleno (10 cupos).");
      return;
    }
    const actualizados = [...vehiculos, nuevoVehiculo];
    setVehiculos(actualizados);
    localStorage.setItem("vehiculos", JSON.stringify(actualizados));
  };

  const eliminarVehiculo = (patente) => {
    const actualizados = vehiculos.filter((v) => v.patente !== patente);
    setVehiculos(actualizados);
    localStorage.setItem("vehiculos", JSON.stringify(actualizados));
  };

  return (
    <>
      <header>
        <h1>Sistema de Estacionamientos</h1>
      </header>
      <main>
        <Formulario onAgregar={agregarVehiculo} />
        <p className="cupos">
          Cupos disponibles: <span>{10 - vehiculos.length}</span>
        </p>
        <ListaVehiculos vehiculos={vehiculos} onEliminar={eliminarVehiculo} />
      </main>
      <footer>
        <p>© 2026 - Evaluación 3</p>
      </footer>
    </>
  );
}

export default App;