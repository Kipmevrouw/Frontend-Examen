import "./Overons.css";
import React from "react";

const Overons = (props) => {
    return(
        <section class="overons" id="overons">
                <div class="overons__wrapper">
                    <h2 class="overons__h2">{props.headerTitle}</h2>
                    <p class="overons__p">{props.stukjeTekst}</p>
                </div>
                <div class="overons__wrapper">
                    <img className="overons__img" src={"/img/" + props.imageM} alt="Foto van Becky."/>
                </div>
   

        </section>
    )
}

export default Overons;