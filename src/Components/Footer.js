import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer-redes'>
      <p>Seguinos en nuestras redes sociales</p>
      <ul>
        <li><a href='#' target='_blank'><FaFacebook/></a></li>
        <li><a href='#' target='_blank'><FaInstagram/></a></li>
        <li><a href='#' target='_blank'><FaTwitter/></a></li>
      </ul>
    </div>
  )
}

export default Footer