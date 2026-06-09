function CardVehiculo({ vehiculo, onEliminar }) {
  return (
    <div className={`card ${vehiculo.permanente ? "card-permanente" : "card-temporal"}`}>
      <h3>{vehiculo.patente}</h3>
      <p>Ingreso: {vehiculo.horaIngreso}</p>
      <span className="card-badge">
        {vehiculo.permanente ? "Permanente" : "Temporal"}
      </span>
      <button className="btn-eliminar" onClick={() => onEliminar(vehiculo.patente)}>
        Eliminar
      </button>
    </div>
  );
}

export default CardVehiculo;