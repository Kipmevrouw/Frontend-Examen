import "./CardSection.css";
import React from "react";

const CardSection = (props) => {
    return(
        <section class="cardsection">
            <div class="cardsection__wrapper">
                {props.children}
            </div>
        </section>
    )
}

export default CardSection;