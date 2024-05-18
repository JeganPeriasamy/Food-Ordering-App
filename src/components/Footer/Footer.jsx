import React from 'react'
import { assets } from '../../assets/assets'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quam porro? Nulla quibusdam expedita, quos praesentium, error voluptatum magni officiis voluptas labore, nobis hic temporibus aspernatur. Neque officia distinctio explicabo!
                </p>
                <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt='' />
                <img src={assets.twitter_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-222-589-5555</li>
                    <li>cotact@tomoto.com</li>
                </ul>
            </div>

        </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 @ Tomato.com -All Right Reserved
      </p>
    </div>
  )
}

export default Footer
