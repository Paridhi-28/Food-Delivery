import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <h1>FeastRush.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestiae non alias ratione quis temporibus consequuntur tenetur repellendus adipisci, ducimus ea sed reprehenderit iusto voluptatibus. Asperiores voluptas blanditiis voluptate temporibus!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-73023-42482</li>
                        <li>contact@feastrush.com</li>
                    </ul>
                </div>
            </div>
<hr />
<p className="footer-copyright">Copyright 2024 @ Paridhi-Agarwal. All Right Reserved.</p>
        </div>
    )
}

export default Footer