import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { Summary } from './pages/Summary/Summary'
import { Plans } from './pages/Plans/Plans'
import './App.css'
import "./styles/base.scss";
import "./styles/variables.scss";

// ✅ Componente que protege rutas
const PrivateRoute = ({ children, requirePlan = false }) => {
  const userData = localStorage.getItem("userData");
  const selectedPlan = localStorage.getItem("selectedPlan");

  // Si no hay login → regresa al inicio
  if (!userData) {
    return <Navigate to="/" replace />;
  }

  // Si la ruta es resumen pero no hay plan → manda a /planes
  if (requirePlan && !selectedPlan) {
    return <Navigate to="/planes" replace />;
  }

  return children;
};

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/planes" element={<PrivateRoute><Plans /></PrivateRoute>} />
        <Route path="/resumen" element={<PrivateRoute requirePlan><Summary /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
