import { NavLink } from "react-router-dom"
import logo from '../Images/Logo Avion.png'
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import HamburgerMenu from "./HamburgerMenu"
import MenuDestinos from "./MenuDestinos"



const NavBar = () => {
  return (
 
    <nav className="fixed w-full flex justify-between items-center bg-blue-700 px-4">
      <div className="flex items-center justify-between h-20">
        <img className="h-10 sm:h-16 mr-4" src={logo} alt="Fachi Travel Design"/>
        <p className="text-white text-xl sm:text-2xl font-bold text-center">FACHI <br/>TRAVEL DESIGN</p>
      </div>
      <div className="flex flex-col items-center justify-center py-2 sm:hidden">
        <HamburgerMenu/>
      </div>
      <div className="mr-4 hidden sm:inline">
        <ul className="flex justify-between list-none">
          <li className="text-white px-4 py-2 no-underline hover:rounded-md hover:bg-gray-200 hover:text-black"><NavLink to="/" activeClassName="active">Inicio</NavLink></li>
          <li>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex px-4 py-2 hover:rounded-md hover:bg-gray-200 hover:text-black text-white">
                    Destinos
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>
              <MenuDestinos/>
            </Menu>
          </li>
          <li className="text-white px-4 py-2 no-underline hover:rounded-md hover:bg-gray-200 hover:text-black"><NavLink to="../Contacto" activeClassName="active">Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar