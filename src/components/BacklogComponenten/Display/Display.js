import { useSelector } from "react-redux";
import "./Display.css"
const Display = () => {
    // Hier word de Selector opgehaald.
    const filteredPokemons = useSelector(state => { return state });
    // Deze functie gaat over alle gefilterde pokemons heen
    const titlesToBeRendered = filteredPokemons.map(pokemon => {
        if (pokemon.naam === "appels"){
            alert("Er is geen pokemon gevonden met deze type.");
        }else{
            return (
                <section key={pokemon.naam} className="display">
                    <img className="display__img" src={pokemon.foto} alt={pokemon.naam} />
                    <p className="display__p">{pokemon.naam}</p>
                </section>
            )
        }
    })

    return (
        <>         
            {titlesToBeRendered}
        </>
    )
}

export default Display;