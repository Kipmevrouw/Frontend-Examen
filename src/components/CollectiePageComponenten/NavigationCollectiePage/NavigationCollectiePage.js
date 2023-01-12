import "./NavigationCollectiePage.css";
import "../HamburgerMenuCollectiePage/HamburgerMenuCollectiePage.css";
import Hamburger from "../HamburgerMenuCollectiePage/HamburgerMenuCollectiePage";
import { useState } from "react";
import React from "react";


export default function NavigationCollectiePage(props){

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
      setHamburgerOpen(!hamburgerOpen)
    }

    const handleShareButton = () => {
      if (navigator.share) {
        navigator
          .share({
            url: `https://localhost:3000`
          })
          .then(() => {
            console.log("Gedeeld!");
          })
          .catch(() => {
            console.log("Delen is niet gelukt");
          });
      } else {
        console.log("Oeps! Je ondersteund geen Web Share API");
      }
    };
    return (
      <>

        <nav class="navigation">
          <section className="navigation__web">
            <figure class="navigation__logo">
                <img className="nav__img" src={"/img/" + props.image} alt="Pokemon logo"/>
              </figure>
              <section className="navigation__links">
                    <a href="/"className="navbarKopjeLink">{props.nav1 || ""}</a>
                    <a href="/BacklogChooserPage" className="navbarKopjeLink">{props.nav2 || ""}</a>
                    <a href="/" className="navbarKopjeLink">{props.nav3 || ""}</a>
                    <a href="/" className="navbarKopjeLink">{props.nav4 || ""}</a>
              </section>            
              <button class="header__button" onClick={handleShareButton} className="header__button" type="button" title="Share this article">{props.buttonText || "Default"}</button> 
          </section>
          <section className="navigation__mobiel">
              <div onClick={toggleHamburger}>
                    <Hamburger image="logo.png"/> 
            </div>
            <figure class="navigation__logo">
              <img className="nav__img" src={"/img/" + props.image} alt="Pokemon logo"/>
            </figure>
            <button class="header__button" onClick={handleShareButton} className="header__button" type="button" title="Share this article">{props.buttonText || "Default"}</button> 
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