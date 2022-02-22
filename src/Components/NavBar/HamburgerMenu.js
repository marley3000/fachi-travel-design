import { React, useState } from 'react'
import { NavLink } from "react-router-dom"
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import MenuDestinos from './MenuDestinos'



const HamburgerMenu = () => {

    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (

    <>
    
        {showHamburgerMenu ? (
            <button
                className="flex text-md text-black items-center cursor-pointer  right-5 top-3 z-50"
                onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
                onMouseLeave={() => setShowHamburgerMenu(!showHamburgerMenu)}
            >   
                <div className={`top-0 right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none p-8 pl-10 text-black fixed h-auto w-auto z-40 ease-in-out duration-300 ${showHamburgerMenu ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="mr-4">
                        <ul className="flex-col list-none ">
                            <li className="text-black px-4 py-2 no-underline hover:rounded-md hover:bg-gray-400"><NavLink to="/" activeClassName="active">Inicio</NavLink></li>
                            <li>
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex px-4 py-2 hover:rounded-md hover:bg-gray-400">
                                            Destinos
                                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>
                                    <MenuDestinos/>
                                </Menu>
                            </li>
                            <li className="text-black px-4 py-2 no-underline hover:rounded-md hover:bg-gray-400"><NavLink to="../Contacto" activeClassName="active">Contacto</NavLink></li>
                        </ul>
                    </div>
                </div>
            </button>
        ) : (
            <svg
                onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
                className="fixed z-30 flex items-center cursor-pointer right-10 top-8"
                fill="white"
                viewBox="0 0 100 80"
                width="20"
                height="20"
            >
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
            </svg>
        )}

    </>
  )
}

export default HamburgerMenu