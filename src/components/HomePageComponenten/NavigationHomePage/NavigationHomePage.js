import "./NavigationHomePage.css";
import "../HamburgerMenuHomePage/HamburgerMenuHomePage.css";
import Hamburger from "../HamburgerMenuHomePage/HamburgerMenuHomePage";
import { useState } from "react";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";


export default function NavigationHomePage(props){

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
                    <Link to='#header' className="navbarKopjeLink">{props.nav1 || ""}</Link>
                    <Link to='#ons' className="navbarKopjeLink">{props.nav2 || ""}</Link>
                    <Link to='#features' className="navbarKopjeLink">{props.nav3 || ""}</Link>
                    <Link to='#abbo' className="navbarKopjeLink">{props.nav4 || ""}</Link>
                    <Link to='#contact' className="navbarKopjeLink">{props.nav5 || ""}</Link>
              </section>            
              <a href="/Login" class="header__button">{props.buttonText || "Default"}</a>
          </section>
          <section className="navigation__mobiel">
              <div onClick={toggleHamburger}>
                    <Hamburger image="logo.png"/> 
            </div>
            <figure class="navigation__logo">
              <img className="nav__img" src={"/img/" + props.image} alt="Pokemon logo"/>
            </figure>
            <a href="/Login" class="header__button">{props.buttonText || "Default"}</a>  
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