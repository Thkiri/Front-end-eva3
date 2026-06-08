function CardVehiculo({ vehiculo }) {
  return (
    <div className="card">
      <h3>{vehiculo.patente}</h3>
      <p>Ingreso: {vehiculo.horaIngreso}</p>
    </div>
  );
}

export default CardVehiculo;