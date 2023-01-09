import "./Ons.css";
import React from "react";

const Ons = (props) => {
    return(
        <section class="overons" id="ons">
                <div class="overons__wrapper">
                    <h2 class="ons__h2">{props.headerTitle}</h2>
                    <p class="ons__p">{props.stukjeTekst}</p>
                </div>
                <div class="overons__wrapper">
                    <img className="ons__img" src={"/img/" + props.imageM} alt="Foto van Becky."/>
                </div>
   

        </section>
    )
}

export default Ons;