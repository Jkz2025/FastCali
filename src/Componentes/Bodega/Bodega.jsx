import React from 'react'
import { useFetchBodegas } from '../Hooks/useFetchBodegas';
import { useState } from 'react';
const Bodega = () => {

  const [bodegas, setBodegas] = useState([]);

    useFetchBodegas(setBodegas)

  return (
    <div>
   <h1>Bodegas</h1>
   <table>
     <thead>
       <tr>
         <th>Codigo</th>
         <th>Nombre</th>
         <th>Direccion</th>
         <th>Telefonico</th>
         <th>Prefijo</th>
         <th>Consecutivo Inicio</th>
         <th>Consecutivo Fin</th>
         <th>Fecha inicio</th>
         <th>Fecha Fin</th>
         <th>Resolucion</th>
         <th>Clave Tecnica</th>
       </tr>
     </thead>
     <tbody>
       {bodegas.map((bod) => (
         <tr key={bod.id}>
           <td>{bod.id}</td>
           <td>{bod.name}</td>
           <td>{bod.direccion}</td>
           <td>{bod.telefono}</td>
           <td>{bod.prefijo}</td>
           <td>{bod.consecutivo_uno}</td>
           <td>{bod.consecutivo_dos}</td>
           <td>{bod.fecha_inicio}</td>
           <td>{bod.fecha_fin}</td>
           <td>{bod.resolucion}</td>
           <td>{bod.clave_tecnica}</td>
         </tr>
       ))}
     </tbody>
   </table>
 </div>
  )
}

export default Bodega
