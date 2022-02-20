import { NavLink } from "react-router-dom"
import logo from './Images/Logo Avion.png'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const NavBar = () => {
  return (
 
    <nav className="fixed w-full flex justify-between items-center bg-blue-800 px-4">
      <div className="flex items-center justify-between h-20">
        <img className="h-16 mr-4" src={logo} alt="Fachi Travel Design"/>
        <p className="text-white text-3xl font-bold">FACHI TRAVEL DESIGN</p>
      </div>
      <div className="mr-4">
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
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink to="./Lista Destinos/Europa.js" className={classNames(
                            active ? 'bg-gray-200 text-black' : 'text-black',
                            'block px-4 py-2 text-sm'
                        )}>Europa</NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink to="./Lista Destinos/Caribe.js" className={classNames(
                            active ? 'bg-gray-200 text-black' : 'text-black',
                            'block px-4 py-2 text-sm'
                        )}>Caribe</NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink to="./Lista Destinos/MedioOriente.js" className={classNames(
                            active ? 'bg-gray-200 text-black' : 'text-black',
                            'block px-4 py-2 text-sm'
                        )}>Medio Oriente</NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink to="./Lista Destinos/SudesteAsiático.js" className={classNames(
                            active ? 'bg-gray-200 text-black' : 'text-black',
                            'block px-4 py-2 text-sm'
                        )}>Sudeste Asiático</NavLink>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="text-white px-4 py-2 no-underline hover:rounded-md hover:bg-gray-200 hover:text-black"><NavLink to="/Contacto" activeClassName="active">Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar