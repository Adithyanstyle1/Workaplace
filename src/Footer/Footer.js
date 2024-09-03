import React from "react";
import './Footer1.css';

const Footer = ()=>{
    return(
        <div className="footer">

            <div className="company">
                <h1>Company</h1>
                <ul>
                    <li>Security</li>
                    <li>News & Media</li>
                    <li>Carriers</li>
                    <li>FAQ'S</li>
                </ul>
                 </div>
            <div className="help">
                <h1>Help & Resources</h1>
                <ul>
                   <li>Help Center</li>
                    <li>Customer Resources</li>
                    <li>Support</li>
                     </ul>
                    </div>
            <div className="legal">
            <h1>Legal Information</h1>
                <ul>
                <li>Previous Policy</li>
                <li>Terms Of Service</li>
                </ul>
                   
                </div>

        </div>
)
}

export default Footer;
