import { useSelector } from "react-redux";
import "./Display.css"
const Display = () => {
    // Hier word de Selector opgehaald.
    const filteredGames = useSelector(state => { return state });

    // Deze staat standaard op false
    let firstToBeRendered = false;
    // Deze functie gaat over alle gefilterde games heen
    const titlesToBeRendered = filteredGames.map(game => {
        // De eerste gevonden game door de ingevulde input komt als eerste te staan met "play this icon"
        if (firstToBeRendered === false) {
            firstToBeRendered = true;
            return (<section key={game.naam} className="display">
                <h2>{game.naam}</h2>
                <p>{game.soort}</p>
                <figure className="display__play">Play this!</figure>
            </section>);
        }
        // De volgende gevonden games komen zonder het icon te staan
        return (
            <section key={game.naam} className="display">
                <h2>{game.naam}</h2>
                <p>{game.soort}</p>
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