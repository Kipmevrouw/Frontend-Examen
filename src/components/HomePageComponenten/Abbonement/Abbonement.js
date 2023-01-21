import "./Abbonement.css";
import React from "react";

const Abbonement = (props) => {
    return(
        <section class="cardsection" id="abbo">
            <div class="cardsection__wrapper">
                {props.children}
            </div>
        </section>
    )
}

export default Abbonement;