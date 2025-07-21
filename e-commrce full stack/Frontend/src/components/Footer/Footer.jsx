import React from 'react'
import './Footer.css'
import footer_logo from '../img/logo_big.png'
import  instagram_icon from '../img/instagram_icon.png'
// import pinterest_icon from '../img/pintester_icon.png'
import whatsapp_icon from '../img/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="img" />
            <p>SHOPPER</p>   
        </div>
        <ul className='footer-links'>
           <li>Company</li>
           <li>Products</li>
           <li>Offices</li>
           <li>About</li>
           <li>Contact</li>
        </ul>
        <div className="footer-socials-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="img" />
            </div>
            {/* <div className="footer-icon-container">
                <img src={pinterest_icon} alt="img" />
            </div> */}
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="img" />
            </div>
        </div>
        <div className="fotter-copyright">
            <hr />
            <p>© 2025 Shopper. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer