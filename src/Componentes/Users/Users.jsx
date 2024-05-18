import React, { useState, useEffect } from "react";
import { useFetchUsers } from "../Hooks/useFetchUsers";

const Users = () => {

  const [users, setUsers] = useState([]);

  useFetchUsers(setUsers)


  return (
    <div>
   
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Ciudad</th>
            <th>Departamento</th>
            <th>NIT</th>
            <th>Direccion</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Tipo Cliente</th>
            <th>obligacion_tributaria</th>
            <th>cedula</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.ciudad}</td>
              <td>{user.departamento}</td>
              <td>{user.nit}</td>
              <td>{user.direccion}</td>
              <td>{user.email}</td>
              <td>{user.telefono}</td>
              <td>{user.tipo_cliente}</td>
              <td>{user.obligacion_tributaria}</td>
              <td>{user.cedula}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
