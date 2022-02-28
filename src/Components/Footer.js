import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='absolute bottom-0 flex items-center justify-center w-full h-12 mt-8 bg-slate-300'>
      <p className='mr-4'>Seguinos en nuestras redes sociales</p>
      <ul className='flex justify-between list-none'>
        <li className='mx-4'><a href="https://es-la.facebook.com/" target='_blank' rel='noreferrer'><FaFacebook/></a></li>
        <li className='mx-4'><a href="https://www.instagram.com/?hl=es-la" target='_blank' rel='noreferrer'><FaInstagram/></a></li>
        <li className='mx-4'><a href="https://twitter.com/?lang=es" target='_blank' rel='noreferrer'><FaTwitter/></a></li>
      </ul>
    </div>
  )
}

export default Footer