import React from 'react';
import menuLogoBlack from './img/menu_black_prueba.svg';
import menuLogoWhite from './img/menu_white_prueba.svg';

//import menuLogo from './img/menu-black.svg';
import avatar from './img/flork-white.svg';
import {useState} from 'react';


function prueba(){
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");
    
    hamburger.addEventListener("click", [navMenu.classList.toggle("active"), hamburger.classList.toggle("active")]);
    
}

export const Header = () => {   
    const [logo, setLogo] = useState(true);
    const validar = () => {
        if(logo === true){
            setLogo(false);
        }else{
            setLogo(true);
        }
    }
    
    return (
        <header>
            <img src={logo ? menuLogoBlack : menuLogoWhite} alt="Prueba" className='hamburger' onClick={() => {prueba(); validar()}} />
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="https://www.facebook.com/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="https://www.facebook.com/" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="https://www.facebook.com/" className="nav-link">Blog</a>
                </li>
                <li className="nav-item">
                    <a href="https://www.facebook.com/" className="nav-link">Projects</a>
                </li>
                <img src={avatar} alt="Flork saying hi" className="avatar-menu"/>
            </ul>
        </header>
    )
};

export default Header;