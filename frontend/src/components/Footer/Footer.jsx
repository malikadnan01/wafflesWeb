import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          {/* added */}
            <img className='logo' src={assets.newlogo} alt="" />
            
            <p> Welcome to Yummy Waffles – Sanatnagar, Srinagar.  Inaugurated on 1st August 2023, Yummy Waffles is your cozy go-to spot in Sanatnagar, Srinagar (Kashmir) for a delightful blend of taste and comfort. Yummy Waffles is the perfect place to relax, hang out, and treat yourself.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2 id='heading'>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                {/* <li>Delivery</li>
                <li>Privacy policy</li> */}
            </ul>
        </div>
        <div className="footer-content-right">
            <h2 id='heading'>GET IN TOUCH</h2>
            <ul>
                <li>Contact : +91 9103037695</li>
                <li>Mail us at : yummywaffles87@gmail.com</li>
                <li>Instagram : yummy_waffles_sgr</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © YummyWaffles.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
