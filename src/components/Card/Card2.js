import "./Card.css";
import React from "react";

const Card2 = (props) => {
    return (
        <section class="card2">

            <article>
                <figure class="card__figure">
                    <h4 class="card__top">{props.top}</h4>
                    <img src={"/img/" + props.image} />
                    <p class="card__p">{props.tekst}</p>
                    <li className="card__li">{props.prijs}</li>
                    <li className="card__li">{props.extra}</li>
                </figure>
                <section class="card__section">
                    <button class="header__button">{props.buttonCard || "Default"}</button>
                </section>
            </article>
        </section>
        
    )
}

export default Card2;

