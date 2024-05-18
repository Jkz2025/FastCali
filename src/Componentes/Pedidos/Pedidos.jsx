import React from 'react'
import { useState } from 'react';
import { useFetchPedidos } from '../Hooks/useFetchPedidos';
import { useFetchUsers } from '../Hooks/useFetchUsers';

const Pedidos = () => {

    const [pedidos, setPedidos] = useState([]);
    useFetchPedidos(setPedidos)

  return (
    <div>
   <h1>Pedidos</h1>
   <table>
     <thead>
       <tr>
         <th>Codigo</th>
         <th>Bodega</th>
         <th>Cliente</th>
         <th>Producto</th>
         <th>Cantidad</th>
         <th>Iva</th>
         <th>Total</th>
         <th>Fecha creacion</th>

       </tr>
     </thead>
     <tbody>
       {pedidos.map((pedido) => (
         <tr key={pedido.id}>
           <td>{pedido.id}</td>
           <td>{pedido.bodega_id}</td>
           <td>{pedido.user_id}</td>
           <td>{pedido.material_id}</td>
           <td>{pedido.cantidad}</td>
           <td>{pedido.iva}</td>
           <td>{pedido.valor_total}</td>
           <td>{pedido.fecha_creacion}</td>
         </tr>
       ))}
     </tbody>
   </table>
 </div>
  )
}

export default Pedidos
