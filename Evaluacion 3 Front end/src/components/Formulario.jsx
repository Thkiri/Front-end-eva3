import { useState } from "react";

function Formulario({ onAgregar }) {
  const [patente, setPatente] = useState("");
  const [error, setError] = useState("");

  const validarPatente = (p) => /^[A-Za-z]{4}\d{2}$/.test(p);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarPatente(patente)) {
      setError("Formato inválido. Ejemplo: ABCD12");
      return;
    }
    setError("");
    const horaIngreso = new Date().toLocaleTimeString("es-CL", {
      hour: "2-digit",
      minute: "2-digit",
    });
    onAgregar({ patente: patente.toUpperCase(), horaIngreso, permanente: false });
    setPatente("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Patente (ej: ABCD12)"
        value={patente}
        onChange={(e) => setPatente(e.target.value)}
        required
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Formulario;