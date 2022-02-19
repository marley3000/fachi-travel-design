import { NavLink } from "react-router-dom"
import logo from './Images/Logo Avion.png'

const NavBar = () => {
  return (
    <nav className="fixed w-full flex justify-between items-center bg-gray-900 px-4">
      <div className="flex items-center justify-between h-20">
        <img className="h-12 mr-4" src={logo} alt="Fachi Travel Design"/>
        <p className="text-white text-3xl font-bold">FACHI TRAVEL DESIGN</p>
      </div>
      <div className="mr-4">
        <ul className="flex justify-between list-none">
          <li className="text-white mx-8 no-underline"><NavLink to="/" activeClassName="active">Inicio</NavLink></li>
          <li className="text-white mx-8 no-underline"><NavLink to="/Destinos" activeClassName="active">Destinos</NavLink></li>
          <li className="text-white mx-8 no-underline"><NavLink to="/Contacto" activeClassName="active">Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar