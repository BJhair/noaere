import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiSettings, FiLogOut, FiMenu } from "react-icons/fi";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { to: "/", icon: <FiHome />, label: "Inicio" },
    { to: "/usuarios", icon: <FiUser />, label: "Usuarios" },
    { to: "/perfil", icon: <FiUser />, label: "Perfil" },
    { to: "/configuracion", icon: <FiSettings />, label: "Configuración" },
  ];

  const linkBase =
    "flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 transition-all duration-200";
  const linkActive = "bg-gray-700 text-cyan-300";
  const linkHover = "hover:bg-gray-700 text-white";

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } bg-gray-900 text-white h-screen p-5 pt-8 relative duration-300`}
    >
      <FiMenu
        className="absolute cursor-pointer -right-3 top-9 w-7 h-7 bg-gray-800 rounded-full border border-gray-700"
        onClick={() => setOpen(!open)}
      />

      <div className="flex items-center gap-x-4">
        <img
          src="/logo192.png"
          alt="Logo"
          className={`cursor-pointer duration-500 w-8 h-8 ${
            open && "rotate-[360deg]"
          }`}
          onClick={() => navigate("/")}
        />
        <h1
          className={`origin-left font-medium text-xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          Papu
        </h1>
      </div>

      <ul className="pt-6">
        {menuItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkHover}`
              }
            >
              {item.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {item.label}
              </span>
            </NavLink>
          </li>
        ))}

        <li
          onClick={() => navigate("/")}
          className={`${linkBase} hover:bg-red-600`}
        >
          <FiLogOut />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Cerrar sesión
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;