import "./NavigationHomePage.css";
import Hamburger from "../HamburgerMenuHomePage/HamburgerMenuHomePage";
import { useState, useEffect } from "react";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";



export default function NavigationHomepage(props){

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
      setHamburgerOpen(!hamburgerOpen)
    }

    useEffect(() => {
      const onScroll =  () => {
        setHamburgerOpen(false)
      };
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

    return (
      <>

        <nav class="navigation">
          <section className="navigation__web">
            <figure class="navigation__logo">
                <img className="nav__img" src={"/img/" + props.image} alt="Pokemon logo"/>
              </figure>
              <section className="navigation__links">
                    <Link onClick={toggleHamburger} to='#header' className="navbarKopjeLink">{props.nav1 || ""}</Link>
                    <Link onClick={toggleHamburger} to='#overons' className="navbarKopjeLink">{props.nav2 || ""}</Link>
                    <Link onClick={toggleHamburger} to='#features' className="navbarKopjeLink">{props.nav3 || ""}</Link>
                    <Link onClick={toggleHamburger} to='#abbo' className="navbarKopjeLink">{props.nav4 || ""}</Link>
                    <Link onClick={toggleHamburger} to='#contact' className="navbarKopjeLink">{props.nav5 || ""}</Link>
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
                  margin-top: 100px;
                  width: 100%;
                  min-height: 100vh;
                }
                .navigation__links{
                  align-items: center;
                  text-align: center;
                  justify-content: center;
                  display: flex;
                  flex-direction: column-reverse;
                }
              }

        `}</style>
      </>
    );
  }