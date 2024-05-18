import React, { useState, useEffect } from 'react';
import { supabase } from '../../CreateClient';
import '../../App.css';

const CreatePedido = () => {
  const [bodegas, setBodegas] = useState([]);
  const [users, setUsers] = useState([]);
  const [materiales, setMateriales] = useState([]);
  const [pedido, setPedido] = useState({
    bodega_id: '',
    user_id: '',
    material_id: '',
    cantidad: 0,
    valor_total: 0,
    iva: 0,
    fecha_creacion: new Date().toISOString() // Inicializamos con la fecha actual
  });

  useEffect(() => {
    const fetchBodegas = async () => {
      const { data } = await supabase.from('bodegas').select('*');
      setBodegas(data);
    };
    const fetchUsers = async () => {
      const { data } = await supabase.from('users').select('*');
      setUsers(data);
    };
    const fetchMateriales = async () => {
      const { data } = await supabase.from('materiales').select('*');
      setMateriales(data);
    };

    fetchBodegas();
    fetchUsers();
    fetchMateriales();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPedido((prevPedido) => ({
      ...prevPedido,
      [name]: value
    }));
  };

  const handleCantidadChange = (e) => {
    const { value } = e.target;
    setPedido((prevPedido) => {
      const materialSeleccionado = materiales.find(p => p.id === parseInt(prevPedido.material_id));
      const valorUnitario = materialSeleccionado ? materialSeleccionado.precio_venta : 0;
      const cantidad = parseInt(value);
      const valor_total = valorUnitario * cantidad;
      const iva = valor_total * 0.19;
      return {
        ...prevPedido,
        cantidad,
        valor_total,
        iva
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('pedidos').insert({
      ...pedido,
      fecha_creacion: new Date().toISOString() // Asegurarse de que la fecha de creación sea la actual al enviar
    });
    if (error) {
      console.error('Error creating pedido:', error.message);
      alert('Error creating pedido: ' + error.message);
    } else {
      alert('Pedido creado exitosamente!');
      // Reset form
      setPedido({
        bodega_id: '',
        user_id: '',
        material_id: '',
        cantidad: 0,
        valor_total: 0,
        iva: 0,
        fecha_creacion: new Date().toISOString() // Resetear la fecha de creación
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="bodega_id" value={pedido.bodega_id} onChange={handleChange}>
          <option value="">Selecciona una bodega</option>
          {bodegas.map((bodega) => (
            <option key={bodega.id} value={bodega.id}>{bodega.name}</option>
          ))}
        </select>
        <select name="user_id" value={pedido.user_id} onChange={handleChange}>
          <option value="">Selecciona un cliente</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
        <select name="material_id" value={pedido.material_id} onChange={handleChange}>
          <option value="">Selecciona un producto</option>
          {materiales.map((material) => (
            <option key={material.id} value={material.id}>{material.name}</option>
          ))}
        </select>
        <input
          type="number"
          name="cantidad"
          placeholder="Cantidad"
          value={pedido.cantidad}
          onChange={handleCantidadChange}
        />
        <p>Valor Total: {pedido.valor_total}</p>
        <p>IVA (19%): {pedido.iva}</p>
        <p>Fecha de Creación: {new Date(pedido.fecha_creacion).toLocaleString()}</p>
        <button type="submit">Crear Pedido</button>
      </form>
    </div>
  );
};

export default CreatePedido;
