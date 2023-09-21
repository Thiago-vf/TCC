import { Routes, Route } from "react-router-dom"

import Home from "./Paginas/Home"
import Funcionamento from "./Paginas/Funcionamento"

 function Router() {
  return (

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/funcionamento" element={<Funcionamento />} />
    </Routes>
  )
}

export default Router