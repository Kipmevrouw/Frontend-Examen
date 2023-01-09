import "./Favo.css";
import React from "react";

const Favo = (props) => {
    return(
        <section className="favo__alles" id="features">
            <div className="favo__width">
                <figure class="favo__figure">
                    <h1>Poliwrath</h1>
                    <img src={"/img/" + props.imagePoliwrath} />
                    <p>Genoeg keuze voor iedere pokemon liefhebber.
                    </p>
                </figure>
            </div>
            <div className="favo__width">
                <figure class="favo__figure">
                    <h1>Gengar</h1>
                    <img src={"/img/" + props.imageGengar} />
                    <p>Je zult alle pokemons kunnen sparen voor in je pokedex.
                    </p>
                </figure>
            </div>
            <div className="favo__width">
                <figure class="favo__figure_pre">
                    <h1>Bulbasaur</h1>
                    <img src={"/img/" + props.imageBulbasaur} />
                    <p>Berries en poisons voor iedere pokemon in je pokedex.</p>
                </figure>   
            </div>
            <div className="favo__width">
                <figure class="favo__figure">
                    <h1>Lapras</h1>
                    <img src={"/img/" + props.imageLapras} />
                    <p>Nooit problemen met pokemons die niet willen luisteren.</p>
                </figure>
            </div>
            <div className="favo__width">
                <figure class="favo__figure">
                    <h1>Ditto</h1>
                    <img src={"/img/" + props.imageDitto} />
                    <p>Flexibel weten welk pokemon het beste bij je past.</p>
                </figure>
            </div>
        </section>
    )


}

export default Favo;
