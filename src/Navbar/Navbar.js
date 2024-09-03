import React, {useState,useRef} from "react";
import './Navbar1.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [menu , setmenu] = useState("Home");
    const menuRef = useRef();
    return(
        <div className="navbar">
            <div className="logo">
                <h1>adithyan</h1>
            </div>
            <div className="list">
            <ul ref={menuRef}>
                <li onClick={()=>{setmenu("Home")}}><Link to='/' style={{textDecoration:'none'}}>Home</Link> {menu=="Home"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("About Us")}}><Link to='/aboutus' style={{textDecoration:'none'}}>About Us</Link> {menu=="About Us"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Features")}}><Link to='/features' style={{textDecoration:'none'}}>Features</Link> {menu=="Features"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Clients")}}><Link to='/clients' style={{textDecoration:'none'}}>Clients</Link> {menu=="Clients"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Sign Up")}}><Link to='/signup' style={{textDecoration:'none'}}>Sign Up</Link> {menu=="Sign Up"?<hr/>:<></>}</li>
            </ul>

            </div>
           

        </div>
    )
}

export default Navbar;
