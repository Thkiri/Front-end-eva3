import { use, useState } from "react"
function Formulario ({onAgregar}){
    const  [patente, setPatente] = useState("");
    const [horaIngreso, setHoraIngreso] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!patente || horaIngreso ) return;
        onAgregar({ patente, horaIngreso });
        setPatente("");
        setHoraIngreso("");
    };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Patente"
        value={patente}
        onChange={(e) => setPatente(e.target.value)}
        required
      />
      <input
        type="time"
        value={horaIngreso}
        onChange={(e) => setHoraIngreso(e.target.value)}
        required
      />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Formulario;
