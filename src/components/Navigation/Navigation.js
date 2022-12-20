import "./Navigation.css";
import "../HamburgerMenu/HamburgerMenu.css";
import Hamburger from "../HamburgerMenu/HamburgerMenu";
import { useState } from "react";
import React from "react";


export default function Navigation(props){

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
      setHamburgerOpen(!hamburgerOpen)
    }
    return (
      <>

        <nav class="navigation">
          <section className="navigation__web">
            <figure class="navigation__logo">
                <img className="nav__img" src={"/img/" + props.image} alt="Pokemon logo"/>
              </figure>
              <section className="navigation__links">
                    <a href="/"className="navbarKopjeLink">Home</a>
                    <a href="" className="navbarKopjeLink">Over</a>
                    <a href="" className="navbarKopjeLink">Features</a>
                    <a href="" className="navbarKopjeLink">Abbonementen</a>
                    <a href="" className="navbarKopjeLink">Contact</a>
              </section>            
              <button class="header__button">{props.buttonText || "Default"}</button>
          </section>
          <section className="navigation__mobiel">
              <div onClick={toggleHamburger}>
                    <Hamburger image="logo.png"/> 
            </div>
            <figure class="navigation__logo">
              <img className="nav__img" src={"/img/" + props.image} alt="Pokemon logo"/>
            </figure>
            <button class="header__button">{props.buttonText || "Default"}</button>  
          </section>
        </nav>

            <style jsx>{`
              @media screen and (max-width:1000px){
                .navigation__web{
                  display: ${hamburgerOpen ? 'inline' : 'none'};
                  height: 100vh;
                  width: 20rem;
                  margin-top: 80px;
                  position: absolute;
                  width: 100%;
                }
              }

        `}</style>
      </>
    );
  }