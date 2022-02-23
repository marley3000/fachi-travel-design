import React from 'react'

const Contacto = () => {
  return (
    <main className='pt-24'>
      <div className='ml-4'>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Nombre
              </label>
              <input className="appearance-none rounded block w-full bg-gray-200 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Apellido
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                E-mail
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Destino
              </label>
              <div>
                <div className="form-check">
                  <input className="form-check-input appearance-none h-4 w-4 border rounded border-gray-300 bg-white checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="destino" id="europa"/>
                  <label className="form-check-label inline-block text-gray-800" for="europa">
                    Europa
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input appearance-none h-4 w-4 border rounded border-gray-300 bg-white checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="destino" id="caribe"/>
                  <label className="form-check-label inline-block text-gray-800" for="caribe">
                    Caribe
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input appearance-none h-4 w-4 border rounded border-gray-300 bg-white checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="destino" id="medio oriente"/>
                  <label className="form-check-label inline-block text-gray-800" for="medio oriente">
                    Medio Oriente
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input appearance-none h-4 w-4 border rounded border-gray-300 bg-white checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="destino" id="sudeste asiatico"/>
                  <label className="form-check-label inline-block text-gray-800" for="sudeste asiatico">
                    Sudeste Asiático
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Tipo de Viaje
              </label>
              <div>
                <div className="form-check">
                  <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="viaje" id="individual"/>
                  <label className="form-check-label inline-block text-gray-800" for="individual">
                    Individual
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="viaje" id="pareja"/>
                  <label className="form-check-label inline-block text-gray-800" for="pareja">
                    Pareja
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-cyan-700 checked:border-cyan-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="viaje" id="familiar"/>
                  <label className="form-check-label inline-block text-gray-800" for="familiar">
                    Familiar
                  </label>
                </div>
              </div>
            </div>

          </div>
          <div className="flex flex-wrap -mx-3 mt-8 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Mensaje
              </label>
              <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button className="shadow bg-cyan-700 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Enviar
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Contacto