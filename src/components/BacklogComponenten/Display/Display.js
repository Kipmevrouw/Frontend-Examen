import { useSelector } from "react-redux";
import "./Display.css"
const Display = () => {
    // Hier word de Selector opgehaald.
    const filteredPokemons = useSelector(state => { return state });

    // Deze staat standaard op false
    let firstToBeRendered = false;
    // Deze functie gaat over alle gefilterde pokemons heen
    const titlesToBeRendered = filteredPokemons.map(pokemon => {
        // De eerste gevonden pokemon door de ingevulde input komt als eerste te staan met een foto van de pokemon
        if (firstToBeRendered === false) {
            firstToBeRendered = true;
            return (<section key={pokemon.naam} className="display">
                <h2>{pokemon.naam}</h2>
                <img></img>
            </section>);
        }
        // De volgende gevonden pokemons komen zonder het icon te staan
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