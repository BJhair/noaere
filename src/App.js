import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from "./Assets/Components/Sidebar/sidebar";
import Topbar from "./Assets/Components/Topbar/topbar";
import Dashboard from "./Assets/Page/Dashboard";
import Usuarios from "./Assets/Page/Usuarios";
import "./App.css";
import Inicio from "./Assets/Page/inicio";


export default function App() {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
     return <Inicio />
  }
  return (  
    <Router>
        {/* App a pantalla completa */}
        < div className="flex h-screen bg-[#1e293b] text-white">
          {/* Lado izquierdo */}
          <Sidebar />

          {/* Lado derecho: columna con Topbar arriba y contenido debajo */}
          <div className="flex flex-col flex-1">
            {/* Topbar pegado arriba; NO usar fixed, usa sticky si quieres */}
            <div className="sticky top-0 z-10">
              <Topbar />
            </div>

            {/* Contenido que crece y hace scroll */}
            <main className="flex-1 overflow-y-auto p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/usuarios" element={<Usuarios />} />
                {/* otras rutas… */}
                <Route path="*" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </div>
    </Router >
  );
}