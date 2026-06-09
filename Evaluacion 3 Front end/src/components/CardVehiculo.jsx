function CardVehiculo({ vehiculo }) {
  return (
    <div className={`card ${vehiculo.permanente ? "card-permanente" : "card-temporal"}`}>
      <h3>{vehiculo.patente}</h3>
      <p>Ingreso: {vehiculo.horaIngreso}</p>
      <p>{vehiculo.permanente ? "Permanente" : "Temporal"}</p>
    </div>
  );
}

export default CardVehiculo;