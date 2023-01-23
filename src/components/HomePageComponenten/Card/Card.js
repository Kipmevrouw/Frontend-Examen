import "./Card.css";
import React from "react";

const Card = (props) => {
    return (
        <section class="card">

            <article>
                <figure class="card__figure">
                    <img src={"/img/" + props.image} alt="pokemoncard serie"/>
                    <p class="card__p">{props.tekst}</p>
                    <li className="card__li">{props.prijs}</li>
                    <li className="card__li">{props.extra}</li>
                </figure>
                <section class="card__section">
                    <button class="header__button card__button">{props.buttonCard || "Default"}</button>
                </section>
            </article>
        </section>
        
    )
}

export default Card;

