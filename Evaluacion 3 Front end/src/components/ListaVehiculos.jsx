import CardVehiculo from "./CardVehiculo";

function ListaVehiculos({ vehiculos, onEliminar }) {
  return (
    <section className="lista">
      {vehiculos.map((v) => (
        <CardVehiculo key={v.patente} vehiculo={v} onEliminar={onEliminar} />
      ))}
    </section>
  );
}

export default ListaVehiculos;