import "./Footer.css";
import React from "react";


const Footer = (props) => {
    return(
        <section className="footer__section">
            <header className="footer__header">
                <div className="footer__div">
                    <h1>Neem hier jouw inspiratie pakje</h1>
                    <p>Base Set 2</p>
                    <p>Neo Discovery</p>
                    <p>Neo Revelation</p>
                    <p>Legendary Collection</p>
                </div>
                <div className="footer__div">
                    <h1>Oude pakjes</h1>
                    <p>Jungle</p>
                    <p>Wizards of the Coast Promos</p>
                    <p>Fossil</p>
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