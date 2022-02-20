import React from 'react'
import { NavLink } from "react-router-dom"
import { GiColiseum, GiPalmTree } from "react-icons/gi"
import { FaUmbrellaBeach, FaChurch } from "react-icons/fa"

const Destinos = () => {
  return (
    
      <ul className="justify-between list-none">
          <li className="text-black mx-8 no-underline hover:text-red-500"><a href='./Lista Destinos/Europa.js'>Europa<GiColiseum/></a></li>
          <li className="text-black mx-8 no-underline hover:text-red-500"><NavLink to="./Lista Destinos/Caribe.js" activeClassName="active">Caribe<FaUmbrellaBeach/></NavLink></li>
          <li className="text-black mx-8 no-underline hover:text-red-500"><NavLink to="./Lista Destinos/Medio Oriente.js" activeClassName="active">Medio Oriente<FaChurch/></NavLink></li>
          <li className="text-black mx-8 no-underline hover:text-red-500"><NavLink to="./Lista Destinos/Sudeste Asiático.js" activeClassName="active">Sudeste Asiático<GiPalmTree/></NavLink></li>
        </ul>
 
  )
}

export default Destinos