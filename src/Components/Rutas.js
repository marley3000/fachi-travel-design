import { BrowserRouter as Router, Route, Routes } from "react-router-dom" 
import NavBar from "./NavBar/NavBar"
import Footer from "./Footer"
import Inicio from "./Inicio"
import Error404 from "./Error404"
import Contacto from "./Contacto"
import Europa from "./ListaDestinos/Europa"
import Caribe from "./ListaDestinos/Caribe"
import MedioOriente from "./ListaDestinos/MedioOriente"
import SudesteAsiático from "./ListaDestinos/SudesteAsiático"



const Rutas = () => {
  return (
      <>
        <Router>
            <header>
              <NavBar/>
            </header>
              <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="./ListaDestinos/Europa" element={<Europa/>}/>
                <Route path="./ListaDestinos/Caribe" element={<Caribe/>}/>
                <Route path="./ListaDestinos/MedioOriente" element={<MedioOriente/>}/>
                <Route path="./ListaDestinos/SudesteAsiático" element={<SudesteAsiático/>}/>
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