// src/Assets/Pages/Usuarios.jsx
import React, { useState } from "react";
import Button from "../Components/Button/button";

export default function Usuarios() {
  const [usuarios] = useState([
    { id: 1, nombre: "Carlos López", correo: "carlos@example.com", rol: "Administrador" },
    { id: 2, nombre: "Ana Pérez", correo: "ana@example.com", rol: "Editor" },
    { id: 3, nombre: "Luis García", correo: "luis@example.com", rol: "Usuario" },
  ]);

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-white">
      <h1 className="text-3xl font-bold mb-4">Usuarios</h1>
      <p className="mb-6 text-gray-300">
        Aquí puedes visualizar la lista de usuarios registrados en el sistema.
      </p>
      <div lassName="grid grid-cols-12">
        <Button/>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-gray-700 rounded-lg">
          <thead className="bg-gray-700 text-gray-200">
            <tr>
              <th className="py-3 px-4 border-b border-gray-600">#</th>
              <th className="py-3 px-4 border-b border-gray-600">Nombre</th>
              <th className="py-3 px-4 border-b border-gray-600">Correo</th>
              <th className="py-3 px-4 border-b border-gray-600">Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr
                key={u.id}
                className="hover:bg-gray-700 transition-colors duration-200"
              >
                <td className="py-3 px-4 border-b border-gray-700">{u.id}</td>
                <td className="py-3 px-4 border-b border-gray-700">{u.nombre}</td>
                <td className="py-3 px-4 border-b border-gray-700">{u.correo}</td>
                <td className="py-3 px-4 border-b border-gray-700">{u.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}