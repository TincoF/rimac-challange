import "./Form.scss";
import { useState } from "react";
import { getUser } from "../../services/user";

export default function Formulario() {

  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");
  const [checkboxes, setCheckboxes] = useState({
    privacidad: false,
    comercial: false,
  });

  const handleCheckboxChange = (e) => {
    setCheckboxes({ ...checkboxes, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!dni || !telefono || !checkboxes.privacidad || !checkboxes.comercial) {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (dni !== "30216147" || telefono !== "5130216147") {
      alert("DNI o teléfono incorrecto. Usa 30216147 y 5130216147 para probar.");
      return;
    }
    try {
      const userApi = await getUser(); // 👈 Aquí consumo la API real

      localStorage.setItem("userData", JSON.stringify(userApi));
      localStorage.setItem("formData", JSON.stringify({ dni, telefono }));

      window.location.href = "/planes";
    } catch (error) {
      console.error("Error al obtener usuario:", error);
    }
    console.log({ dni, telefono, checkboxes });
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <p className="formulario__descripcion">
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>

      {/* DNI y Número de documento */}
      <div className="formulario__input-grupo-container">
        <div className="formulario__input-grupo">
          <select className="formulario__select">
            <option>DNI</option>
            <option>RUC</option>
          </select>
          <input
            type="text"
            placeholder="Nro. de documento"
            className="formulario__input"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            required
          />
        </div>

        {/* Celular */}
        <div className="formulario__input-grupo">
          <input
            type="tel"
            placeholder="Celular"
            className="formulario__input-unico"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Checkboxes */}
      <div className="formulario__checkbox-grupo">
        <label>
          <input
            type="checkbox"
            name="privacidad"
            checked={checkboxes.privacidad}
            onChange={handleCheckboxChange}
          />
          <span className="formulario__custom-checkbox" />
          Acepto lo Política de Privacidad
        </label>
        <label>
          <input
            type="checkbox"
            name="comercial"
            checked={checkboxes.comercial}
            onChange={handleCheckboxChange}
          />
          <span className="formulario__custom-checkbox" />
          Acepto la Política Comunicaciones Comerciales
        </label>
        <div>
          <p className="formulario__terminos">Aplican Términos y Condiciones.</p>
        </div>
      </div>

      {/* Texto de términos */}


      {/* Botón */}
      <button type="submit" className="formulario__boton">
        Cotiza aquí
      </button>
    </form>
  );
}
