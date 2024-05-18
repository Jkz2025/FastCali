import React, { useState, useEffect } from "react";
import { supabase } from "../../CreateClient";
import "../../App.css";
import { fetchUsers } from "../Function/fetchUsers";
import { useFetchUsers } from "../Hooks/useFetchUsers";



const CreateUser = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    age: "",
    ciudad: "",
    departamento: "",
    nit: "",
    direccion: "",
    email: "",
    telefono: "",
    tipo_cliente: "",
    obligacion_tributaria:"",
    cedula:""
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Definición de isSubmitting

  function handleChange(e) {
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

useFetchUsers(setUsers)

  async function createUser(e) {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const { error } = await supabase.from("users").insert({
      name: user.name,
      age: user.age,
      ciudad: user.ciudad,
      departamento: user.departamento,
      nit: user.nit,
      direccion: user.direccion,
      email: user.email,
      telefono: user.telefono,
      tipo_cliente: user.tipo_cliente,
      obligacion_tributaria: user.obligacion_tributaria,
      cedula: user.cedula
    });

    if (error) {
      console.error("Error creating user:", error.message);
      setIsSubmitting(false);
      alert("Error creating user: " + error.message);
    } else {
      const data = await fetchUsers();
      setUsers(data);
      setIsSubmitting(false);
      setUser({
        name: "",
        age: "",
        ciudad: "",
        departamento: "",
        nit: "",
        direccion: "",
        email: "",
        telefono: "",
        tipo_cliente:"",
        obligacion_tributaria:"",
        cedula:""
      });
    }
  }

  return (
    <div>
      <form onSubmit={createUser}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={user.name}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          onChange={handleChange}
          value={user.age}
        />
        <input
          type="text"
          placeholder="Ciudad"
          name="ciudad"
          onChange={handleChange}
          value={user.ciudad}
        />
        <input
          type="text"
          placeholder="Departamento"
          name="departamento"
          onChange={handleChange}
          value={user.departamento}
        />
              <input
          type="text"
          placeholder="NIT"
          name="nit"
          onChange={handleChange}
          value={user.nit}
        />
                <input
          type="number"
          placeholder="cedula"
          name="cedula"
          onChange={handleChange}
          value={user.cedula}
        />
        <input
          type="text"
          placeholder="Direccion"
          name="direccion"
          onChange={handleChange}
          value={user.direccion}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
        <input
          type="text"
          placeholder="Telefono"
          name="telefono"
          onChange={handleChange}
          value={user.telefono}
          />
         <select
  name="tipo_cliente"
  onChange={handleChange}
  value={user.tipo_cliente}
>
  <option value="">Seleccione tipo de cliente</option>
  <option value="Natural">Natural</option>
  <option value="Jurídica">Jurídica</option>
</select>
<select
  name="obligacion_tributaria"
  onChange={handleChange}
  value={user.obligacion_tributaria}
>
  <option value="">Seleccione obligaciones tributarias</option>
  <option value="110">Impuesto sobre la Renta y Complementarios</option>
  <option value="120">Impuesto de Industria y Comercio (ICA)</option>
  <option value="130">Impuesto al Valor Agregado (IVA)</option>
  <option value="140">Impuesto de Timbre Nacional</option>
  <option value="150">Retención en la Fuente</option>
  <option value="160">Impuesto de Ganancia Ocasional</option>
  <option value="170">Impuesto de Consumo</option>
  <option value="310">Impuesto Predial</option>
  <option value="320">Impuesto de Vehículos Automotores</option>
  <option value="330">Impuesto de Registro</option>
  <option value="340">Impuesto de Sobretasa a la Gasolina</option>
  <option value="350">Impuesto al Carbono</option>
  <option value="360">Impuesto al Patrimonio</option>
  <option value="370">Impuesto a las Transacciones Financieras</option>
  <option value="Otros*">Otros*</option>
</select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
