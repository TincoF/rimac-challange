import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login/Login'
import { Summary } from './pages/Summary/Summary'
import { Plans } from './pages/Plans/Plans'
import "./styles/base.scss";
import "./styles/variables.scss";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/planes" element={<Plans />} />
        <Route path="/resumen" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
