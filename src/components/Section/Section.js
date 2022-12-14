import "./Section.css";
import React from "react";

const Section = (props) => {
    return(
        <section class="overons">
                <div class="overons__wrapper">
                    <h2 class="section__h2">{props.headerTitle}</h2>
                    <p class="section__p">{props.stukjeTekst}</p>
                </div>
                <div class="overons__wrapper">
                    <img className="section__img" src={"/img/" + props.imageM} alt="Foto van Becky."/>
                </div>
   

        </section>
    )
}

export default Section;