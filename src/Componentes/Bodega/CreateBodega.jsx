import React, { useState, useEffect } from "react";
import { supabase } from "../../CreateClient";
import "../../App.css";
import { fetchBodegas } from "../Function/fetchBodegas";
import { useFetchBodegas } from "../Hooks/useFetchBodegas";

const CreateBodega = () => {
    const [bodegas, setBodegas] = useState([]);

    const [bodega, setBodega] = useState({
    name: "",
    direccion: "",
    telefono: "",
    prefijo: "",
    consecutivo_uno: "",
    consecutivo_dos: "",
    fecha_inicio: "",
    fecha_fin: "",
    resolucion: "",
    clave_tecnica: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Definición de isSubmitting
  console.log("Valor del input 'name':", bodega.name); // Captura el valor del input 'name'


  function handleChange(e) {
    setBodega((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  useFetchBodegas(setBodegas);

  async function createBodega(e) {
    e.preventDefault();
    if (isSubmitting) return;

    // Validación para el campo de nombre
    if (!bodega.name) {
      alert("Por favor, introduce un nombre para la bodega.");
      return;
    }
    const { error } = await supabase.from("bodegas").insert({
      name: bodega.name,
      direccion: bodega.direccion,
      telefono: bodega.telefono,
      prefijo: bodega.prefijo,
      consecutivo_uno: bodega.consecutivo_uno,
      consecutivo_dos: bodega.consecutivo_dos,
      fecha_inicio: bodega.fecha_inicio,
      fecha_fin: bodega.fecha_fin,
      resolucion: bodega.resolucion,
      clave_tecnica: bodega.clave_tecnica,
    });

    if (error) {
      console.error("Error creating bodega:", error.message);
      setIsSubmitting(false);
      alert("Error creating bodega  : " + error.message);
    } else {
      const data = await fetchBodegas();
      setBodegas(data);
      setIsSubmitting(false);
      setBodega({
        name: "",
        direccion: "",
        telefono: "",
        prefijo: "",
        consecutivo_uno: "",
        consecutivo_dos: "",
        fecha_inicio: "",
        fecha_fin: "",
        resolucion: "",
        clave_tecnica: "",
      });
    }
  }

  return (
    <div>
      <form onSubmit={createBodega}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={bodega.name}
        />
        <input
          type="number"
          placeholder="Direccion"
          name="direccion"
          onChange={handleChange}
          value={bodega.direccion}
        />
        <input
          type="number"
          placeholder="Telefono"
          name="telefono"
          onChange={handleChange}
          value={bodega.telefono}
        />
        <input
          type="text"
          placeholder="Departamento"
          name="departamento"
          onChange={handleChange}
          value={bodega.departamento}
        />
        <input
          type="number"
          placeholder="NIT"
          name="nit"
          onChange={handleChange}
          value={bodega.nit}
        />

        <input
          type="text"
          placeholder="Prefijo"
          name="prefijo"
          onChange={handleChange}
          value={bodega.prefijo}
        />
        <input
          type="number"
          placeholder="Consecutivo Uno"
          name="consecutivo_uno"
          onChange={handleChange}
          value={bodega.consecutivo_uno}
        />
        <input
          type="number"
          placeholder="Consecutivo Dos"
          name="consecutivo_dos"
          onChange={handleChange}
          value={bodega.consecutivo_dos}
        />
        <input
          type="date"
          placeholder="Fecha Inicio"
          name="fecha_inicio"
          onChange={handleChange}
          value={bodega.fecha_inicio}
        />
        <input
          type="date"
          placeholder="Fecha Fin"
          name="fecha_fin"
          onChange={handleChange}
          value={bodega.fecha_fin}
        />
        <input
          type="number"
          placeholder="Resolucion"
          name="resolucion"
          onChange={handleChange}
          value={bodega.resolucion}
        />
        <input
          type="number"
          placeholder="Clave tecnica"
          name="clave_tecnica"
          onChange={handleChange}
          value={bodega.clave_tecnica}
        />
        <button type="submit">Crear Bodega</button>
      </form>
    </div>
  );
};

export default CreateBodega;
