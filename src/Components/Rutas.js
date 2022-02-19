import { BrowserRouter as Router, Route, Routes } from "react-router-dom" 
import NavBar from "./NavBar"
import Footer from "./Footer"
import Inicio from "./Inicio"
import Destinos from "./Destinos"
import Error404 from "./Error404"
import Contacto from "./Contacto"

const Rutas = () => {
  return (
      <>
        <Router>
            <header>
                <NavBar/>
            </header>
              <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Destinos" element={<Destinos/>}/>
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