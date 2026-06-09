function CardVehiculo({ vehiculo, onEliminar }) {
  return (
    <div className={`card ${vehiculo.permanente ? "card-permanente" : "card-temporal"}`}>
      <h3>{vehiculo.patente}</h3>
      <p>Ingreso: {vehiculo.horaIngreso}</p>
      <p>{vehiculo.permanente ? "Permanente" : "Temporal"}</p>
      <button onClick={() => onEliminar(vehiculo.patente)}>Eliminar</button>
    </div>
  );
}

export default CardVehiculo;