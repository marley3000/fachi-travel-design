import React from 'react'
import AvionTravel from "./Images/AvionTravel.jpg"

const Contacto = () => {
  return (
    <main className='pt-24 pb-24'>
      <h2 className='text-lg font-bold text-center sm:text-xl'>Envianos tu consulta y te reponderemos a la brevedad</h2>
      <div className='flex m-4 justify-evenly'>
        <form className="w-5/6 pt-16 sm:max-w-lg">
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-first-name">
                Nombre
              </label>
              <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder=""/>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-last-name">
                Apellido
              </label>
              <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-password">
                E-mail
              </label>
              <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-first-name">
                Destino
              </label>
              <div>
                <div className="form-check">
                  <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded appearance-none cursor-pointer form-check-input checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none" type="checkbox" name="destino" id="europa"/>
                  <label className="inline-block text-gray-800 form-check-label" for="europa">
                    Europa
                  </label>
                </div>
                <div className="form-check">
                  <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded appearance-none cursor-pointer form-check-input checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none" type="checkbox" name="destino" id="caribe"/>
                  <label className="inline-block text-gray-800 form-check-label" for="caribe">
                    Caribe
                  </label>
                </div>
                <div className="form-check">
                  <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded appearance-none cursor-pointer form-check-input checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none" type="checkbox" name="destino" id="medio oriente"/>
                  <label className="inline-block text-gray-800 form-check-label" for="medio oriente">
                    Medio Oriente
                  </label>
                </div>
                <div className="form-check">
                  <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded appearance-none cursor-pointer form-check-input checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none" type="checkbox" name="destino" id="sudeste asiatico"/>
                  <label className="inline-block text-gray-800 form-check-label" for="sudeste asiatico">
                    Sudeste Asiático
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-first-name">
                Tipo de Viaje
              </label>
              <div>
                <div className="form-check">
                  <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 appearance-none cursor-pointer form-check-input checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none" type="radio" name="viaje" id="individual"/>
                  <label className="inline-block text-gray-800 form-check-label" for="individual">
                    Individual
                  </label>
                </div>
                <div className="form-check">
                  <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 appearance-none cursor-pointer form-check-input checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none" type="radio" name="viaje" id="pareja"/>
                  <label className="inline-block text-gray-800 form-check-label" for="pareja">
                    Pareja
                  </label>
                </div>
                <div className="form-check">
                  <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 appearance-none cursor-pointer form-check-input checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none" type="radio" name="viaje" id="familiar"/>
                  <label className="inline-block text-gray-800 form-check-label" for="familiar">
                    Familiar
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-8 mb-6 -mx-3">
            <div className="w-full px-3">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-password">
                Mensaje
              </label>
              <textarea className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none focus:outline-none focus:bg-white focus:border-gray-500" id="message"></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button className="px-4 py-2 font-bold text-white rounded shadow bg-cyan-700 hover:bg-indigo-700 focus:shadow-outline focus:outline-none" type="button">
                Enviar
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
        <img className="self-center hidden rounded md:inline-block md:h-52 lg:h-72 xl:h-96" src={AvionTravel} alt="Avion Travel"/>
      </div>
    </main>
  )
}

export default Contacto