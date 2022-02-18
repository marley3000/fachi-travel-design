import { NavLink } from "react-router-dom"
import logo from './Images/Logo Avion.png'
const NavBar = () => {
  const estilosAccesos = {
    color: "#fcf8ff",
    textDecoration: "none",
    margin: "0 2rem"
  }

  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="Fachi Travel Design"/>
        <p>FACHI TRAVEL DESIGN</p>
      </div>
      <div className="nav-accesos">
        <ul>
          <li><NavLink to="/" activeClassName="active" style={estilosAccesos}>Inicio</NavLink></li>
          <li><NavLink to="/Destinos" activeClassName="active" style={estilosAccesos}>Destinos</NavLink></li>
          <li><NavLink to="/Contacto" activeClassName="active" style={estilosAccesos}>Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar