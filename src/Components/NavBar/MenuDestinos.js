import { React, Fragment } from 'react'
import { NavLink } from "react-router-dom"
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const MenuDestinos = () => {
  return (
    
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
                <NavLink to="../Lista Destinos/Europa" className={classNames(
                    active ? 'bg-gray-200 text-black' : 'text-black',
                    'block px-4 py-2 text-sm'
                )}>Europa</NavLink>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                <NavLink to="../Lista Destinos/Caribe" className={classNames(
                    active ? 'bg-gray-200 text-black' : 'text-black',
                    'block px-4 py-2 text-sm'
                )}>Caribe</NavLink>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                <NavLink to="../Lista Destinos/MedioOriente" className={classNames(
                    active ? 'bg-gray-200 text-black' : 'text-black',
                    'block px-4 py-2 text-sm'
                )}>Medio Oriente</NavLink>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                <NavLink to="../Lista Destinos/SudesteAsiático" className={classNames(
                    active ? 'bg-gray-200 text-black' : 'text-black',
                    'block px-4 py-2 text-sm'
                )}>Sudeste Asiático</NavLink>
                )}
            </Menu.Item>
            </div>
        </Menu.Items>
    </Transition>


  )
}

export default MenuDestinos