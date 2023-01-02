import "./Abbonement.css";
import React from "react";

const Abbonement = (props) => {
    return(
        <section class="cardsection">
            <div class="cardsection__wrapper">
                {props.children}
            </div>
        </section>
    )
}

export default Abbonement;