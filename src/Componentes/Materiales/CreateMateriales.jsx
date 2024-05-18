import React, { useState, useEffect } from "react";
import { supabase } from "../../CreateClient";
import "../../App.css";
import { fetchMateriales } from "../Function/fetchMateriales";
import { useFetchMateriales } from "../Hooks/useFetchMaterials";

const CreateMateriales = () => {
    const [materiales, setMateriales] = useState([]);

    const [material, setMaterial] = useState({
    name: "",
    categoria: "",
    costo: "",
    precio_venta: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Definición de isSubmitting


  function handleChange(e) {
    setMaterial((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  useFetchMateriales(setMateriales);

  async function createMaterial(e) {
    e.preventDefault();
    if (isSubmitting) return;

    // Validación para el campo de nombre
    if (!material.name) {
      alert("Por favor, introduce un nombre para el material.");
      return;
    }
    const { error } = await supabase.from("materiales").insert({
      name: material.name,
      categoria: material.categoria,
      costo: material.costo,
      precio_venta: material.precio_venta,
    });

    if (error) {
      console.error("Error creating material:", error.message);
      setIsSubmitting(false);
      alert("Error creating material  : " + error.message);
    } else {
      const data = await fetchMateriales();
      setMateriales(data);
      setIsSubmitting(false);
      setMaterial({
        name: "",
        categoria: "",
        costo: "",
        precio_venta: ""
    });
    }
  }

  return (
    <div>
      <form onSubmit={createMaterial}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={material.name}
        />
        <input
          type="text"
          placeholder="Categoria"
          name="categoria"
          onChange={handleChange}
          value={material.categoria}
        />
        <input
          type="number"
          placeholder="Costo"
          name="costo"
          onChange={handleChange}
          value={material.costo}
        />
        <input
          type="number"
          placeholder="Precio Venta"
          name="precio_venta"
          onChange={handleChange}
          value={material.precio_venta}
        />
       
        <button type="submit">Crear Material</button>
      </form>
    </div>
  );
};

export default CreateMateriales;
