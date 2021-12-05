import React from 'react';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo'
import './App.css';
import Footer from './components/Footer';
//import Header from './components/Header';

//Prueba React Router
import menuLogoBlack from './components/img/menu_black_prueba.svg';
import menuLogoWhite from './components/img/menu_white_prueba.svg';
//import avatar from './img/flork-white.svg';
import avatar from './components/img/flork-white.svg';
import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './components/About';


function prueba(){
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");
    
    hamburger.addEventListener("click", [navMenu.classList.toggle("active"), hamburger.classList.toggle("active")]);
    
}


function App() {

  //More about React Router Test
  const [logo, setLogo] = useState(true);
  const validar = () => {
      if(logo === true){
          setLogo(false);
      }else{
          setLogo(true);
      }
  }
  //----------
  return (
    <div className="App">
        {/* <Header /> */}
        <header>
            <img src={logo ? menuLogoBlack : menuLogoWhite} alt="Prueba" className='hamburger' onClick={() => {prueba(); validar()}} />
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="https://www.facebook.com/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="https://www.facebook.com/" className="nav-link">About</a>
                </li>
                <Link to="/About-Me">About Me</Link>
                <li className="nav-item">
                    <a href="https://www.facebook.com/" className="nav-link">Blog</a>
                </li>
                <li className="nav-item">
                    <a href="https://www.facebook.com/" className="nav-link">Projects</a>
                </li>
                <img src={avatar} alt="Flork saying hi" className="avatar-menu"/>
            </ul>
        </header>

        <Router>
          <Switch>
            <Route path="/About-Me">
              <About />
            </Route>
          </Switch>
        </Router>

        <main className='main'>
        <SectionOne />
        <SectionTwo />
        </main>
        <Footer />
    </div>
  );
}

export default App;
