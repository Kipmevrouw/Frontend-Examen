import "./Navigation.css";
import React from "react";


function Navigation(props) {
    return (
      <>
        <nav class="navigation">
            <figure class="navigation__logo">
              <img className="nav__img" src={"/img/" + props.image} alt="Pokemon logo"/>
            </figure>
            <section className="navigation__links">
                <div className="navbarKopjeLink">
                <a href="/">Home</a>
                </div>
                <div className="navbarKopjeLink">
                  <a href="">Over</a>
                </div>
                <div className="navbarKopjeLink">
                  <a href="">Features</a>
                </div>
                <div className="navbarKopjeLink">
                  <a href="">Abbonementen</a>
                </div>
                <div className="navbarKopjeLink">
                  <a href="">Contact</a>
                </div>
            </section>            
            <button class="header__button">{props.buttonText || "Default"}</button>
        </nav>
      </>
    );
  }
  
  export default Navigation;