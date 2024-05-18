import React from 'react'
import { useState } from 'react';
import { useFetchEmpresas } from '../Hooks/useFetchEmpresa';

const Empresa = () => {

  const [empresa, setEmpresa] = useState([]);

  useFetchEmpresas(setEmpresa)

  return (
    <div>
   <h1>Empresa</h1>
   <table>
     <thead>
       <tr>
         <th>Codigo</th>
         <th>Nombre</th>
         <th>Nit</th>
         <th>Razon Social</th>
         <th>Direccion</th>
       </tr>
     </thead>
     <tbody>
       {empresa.map((emp) => (
         <tr key={emp.id}>
           <td>{emp.id}</td>
           <td>{emp.name}</td>
           <td>{emp.nit}</td>
           <td>{emp.razon_social}</td>
           <td>{emp.direccion}</td>
         </tr>
       ))}
     </tbody>
   </table>
 </div>
  )
}

export default Empresa
