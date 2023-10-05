import { Routes, Route } from "react-router-dom"

import Home from "./Paginas/Home"
import Funcionamento from "./Paginas/Funcionamento"
import Objetivo from "./Paginas/Objetivo"
import Equipamentos from "./Paginas/Equipamentos"
import Creditos from "./Paginas/Creditos"
import Publico from "./Paginas/Publico"

 function Router() {
  return (

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/funcionamento" element={<Funcionamento />} />
    <Route path="/objetivo" element={<Objetivo />} />
    <Route path="/equipamentos" element={<Equipamentos />} />
    <Route path="/creditos" element={<Creditos />} />
    <Route path="/Publico" element={<Publico />} />
    </Routes>
  )
}

export default Router