import React, {Component} from 'react';
//import menuLogo from './assets/menu.png';
//import menuLogo from './img/menu_black_prueba.svg'
import avatar from './img/flork-white.svg'

/* const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("click", activarMenu);

function activarMenu(){
navMenu.classList.toggle("active");
} */

function prueba(){
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");
    const bar = document.querySelectorAll("span.bar");

    hamburger.addEventListener("click", [navMenu.classList.toggle("active"), console.log('Click')]);

    /* hamburger.addEventListener("click", activarMenu);
    function activarMenu(){
    navMenu.classList.toggle("active");
    } */
}

export const Header = () => {   
    return (
        <header>
            {/* <img src={menuLogo} alt="Prueba" className='hamburger' onClick={prueba} /> */}
            <div className="hamburger" onClick={prueba}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
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