import { useSelector } from "react-redux";
import "./Display.css"
const Display = () => {
    // Hier word de Selector opgehaald.
    const filteredPokemons = useSelector(state => { return state });
    // Deze functie gaat over alle gefilterde pokemons heen
    const titlesToBeRendered = filteredPokemons.map(pokemon => {
        // De eerste gevonden pokemons kom te voor schijn
        return (
            <section key={pokemon.naam} className="display">
                <h2>{pokemon.naam}</h2>
            </section>
        )
    })

    return (
        <>         
            {titlesToBeRendered}
        </>
    )
}

export default Display;