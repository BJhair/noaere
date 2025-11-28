// src/Assets/Pages/Usuarios.jsx
import React, { useState } from "react";
import Button from "../Components/Button/button";
import Table from "../Components/Table/table";

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
        <Table/>
      </div>
    </div>
  );
}