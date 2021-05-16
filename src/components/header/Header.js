import React from 'react'
import best from '../../assets/best.jpg';
import logo from '../../assets/logo.png';
import name from '../../assets/name.png';
import "./header.css"

const Header = () => {
    return (
        <div>
          
            <img className="header__logo"src={logo} alt="" />
          
         <img className="header__image"src={best} alt="" />   
        </div>
    )
}

export default Header
