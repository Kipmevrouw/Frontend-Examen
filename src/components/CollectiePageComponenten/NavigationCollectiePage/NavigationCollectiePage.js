import "./NavigationCollectiePage.css";
import "../HamburgerMenuCollectiePage/HamburgerMenuCollectiePage.css";
import Hamburger from "../HamburgerMenuCollectiePage/HamburgerMenuCollectiePage";
import { useState, useEffect } from "react";
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
                    <a onClick={toggleHamburger} href="/Collectiepage/becky"className="navbarKopjeLink">{props.nav1 || ""}</a>
                    <a onClick={toggleHamburger} href="/BacklogChooserPage" className="navbarKopjeLink">{props.nav2 || ""}</a>
                    <a onClick={toggleHamburger} href="/" className="navbarKopjeLink">{props.nav3 || ""}</a>
                    <a onClick={toggleHamburger} href="/" className="navbarKopjeLink">{props.nav4 || ""}</a>
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