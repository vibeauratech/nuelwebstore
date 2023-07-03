import React from 'react'
import { useState } from 'react'
import {Link } from 'react-router-dom'
import './Navbar.css'
import Menu from "./NavImages/menu.png";
import CartIcon from "./NavImages/CartIcon.png";
import SearchIcon from "./NavImages/SearchIcon.png";
import User from "./NavImages/User.png";


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  

    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <p>Nuel's Store</p>
          </div>
          
           <div className={`nav-elements  ${showNavbar && 'active'}`}>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>  

                <div className='auth-flex'>
                  <div><img src={SearchIcon} className="nav-icon" alt="list Images" /></div>
                  <div className='cartbox'>
                    <img src={CartIcon} className="nav-icon" alt="list Images" />
                    <span>0</span>
                  </div>
                  <div className='auth'><img src={User} className="nav-icon" alt="list Images" /></div> 
                </div>                
            </div>
                

            <div className="menu-icon" onClick={handleShowNavbar}>
             <img src={Menu} className="" alt="list Images" />
            </div>
        </div>
      </nav>
    )
  }
export default Navbar
