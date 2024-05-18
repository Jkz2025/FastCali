import React from 'react'
import { useState } from 'react';
import { useFetchMateriales } from '../Hooks/useFetchMaterials';

const Materiales = () => {

  const [materiales, setMateriales] = useState([]);

    useFetchMateriales(setMateriales)

  return (
    <div>
   <h1>Materiales</h1>
   <table>
     <thead>
       <tr>
         <th>Codigo</th>
         <th>Nombre</th>
         <th>Categoria</th>
         <th>Costo</th>
         <th>Precio Venta</th>
       </tr>
     </thead>
     <tbody>
       {materiales.map((material) => (
         <tr key={material.id}>
           <td>{material.id}</td>
           <td>{material.name}</td>
           <td>{material.categoria}</td>
           <td>{material.costo}</td>
           <td>{material.precio_venta}</td>
         </tr>
       ))}
     </tbody>
   </table>
 </div>
  )
}

export default Materiales
