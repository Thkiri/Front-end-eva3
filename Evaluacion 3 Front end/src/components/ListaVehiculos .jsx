import CardVehiculo from "./CardVehiculo";

function ListaVehiculos({ vehiculos }) {
  return (
    <section className="lista">
      {vehiculos.map((v) => (
        <CardVehiculo key={v.patente} vehiculo={v} />
      ))}
    </section>
  );
}

export default ListaVehiculos;
