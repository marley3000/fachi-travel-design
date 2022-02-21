import { BrowserRouter as Router, Route, Routes } from "react-router-dom" 
import NavBar from "./NavBar/NavBar"
import Footer from "./Footer"
import Inicio from "./Inicio"
import Error404 from "./Error404"
import Contacto from "./Contacto"
import Europa from "./Lista Destinos/Europa"
import Caribe from "./Lista Destinos/Caribe"
import MedioOriente from "./Lista Destinos/MedioOriente"
import SudesteAsiático from "./Lista Destinos/SudesteAsiático"


const Rutas = () => {
  return (
      <>
        <Router>
            <header>
              <NavBar/>
            </header>
              <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="./Lista Destinos/Europa" element={<Europa/>}/>
                <Route path="./Lista Destinos/Caribe" element={<Caribe/>}/>
                <Route path="./Lista Destinos/MedioOriente" element={<MedioOriente/>}/>
                <Route path="./Lista Destinos/SudesteAsiático" element={<SudesteAsiático/>}/>
                <Route path="/Contacto" element={<Contacto/>}/>
                <Route path="*" element={<Error404/>}/>
              </Routes>
            <footer>
              <Footer/>
            </footer>
        </Router>
      </>
  )
}

export default Rutas