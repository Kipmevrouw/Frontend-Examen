import "./Footer.css";
import React from "react";


const Footer = (props) => {
    return(
        <section className="footer__section">
            <header className="footer__header">
                <div className="footer__div div1">
                    <h1>Naviagatie</h1>
                    <p>Home</p>
                    <p>Over</p>
                    <p>Features</p>
                    <p>Contact</p>
                </div>
                <div className="footer__div div">
                    <h1>Support</h1>
                    <p>Bel ons via 020-0354834</p>
                    <p>pokemoncards@help.nl</p>
                </div>
                <div className="footer__div">
                    <h1>Jouw account</h1>
                    <button class="header__button">{props.buttonText || "Default"}</button>
                </div>

            </header>
            <main className="footer__main">            
            <p className="footer__disclaimer">© 2022 PokemonKaarten Inc</p>
            <div className="footer__icons">
                <i class="fa-brands fa-youtube footer__apart__icon"></i>
                <i class="fa-brands fa-facebook footer__apart__icon"></i>
                <i class="fa-brands fa-twitter footer__apart__icon"></i>
                <i class="fa-brands fa-instagram footer__apart__icon"></i>
            </div>
            </main>

        </section>
    );

}

export default Footer;