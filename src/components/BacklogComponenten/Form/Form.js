import "./Form.css";
import { useState } from "react";
// Deze import haalt useDispatch op
import { useDispatch } from "react-redux";
import { filterPokemonsByNaam, filterPokemonsBySoort} from "../../../helpers/filterPokemons";

// Deze import geeft de benodigde data door aan de bijbehorende functie
import {pokemons} from "../../../data/pokemons";

const Form = () => {
    // Dit is een state met arrays van objecten
    const [inputs, setInputs] = useState([
        {
            id: "naam",
            value: "",
            label: "Pokemon",
            filter: filterPokemonsByNaam
        },
        {
            id: "soort",
            value: "",
            label: "Soort",
            filter: filterPokemonsBySoort
        },
    ]);

    // useDispatch word hier een variabel
    let dispatch = useDispatch();

    // Hier word het aangepast als je wat in de input typt
    const onInputChanged = (event) => {
        // Hier word de betreffende input opgeslagen
        let copy = [...inputs];
        // Hier word de opgeslagen input gebruikt
        copy.map(input => {
            // Hier word er gekeken of het id van de input gelijk
            // staat aan 1. Zo ja? Dan stopt hij het in de input Value
            if (input.id === event.target.id) {
                input.value = event.target.value;
            }
        });
        // Hier word opnieuw een copy gemaakt en terug gezet in de state "input" 
        setInputs(copy);
    }

    // Hier word een functie gemaakt die over alle inputs heen gaat
    // De array noemt niet meer 'inputs', maar 'objectFromStateArray'
    const inputsToBeRendered = inputs.map(objectFromStateArray => {
        
        // Hier word in ieder iets gereturned
        return (
        <div key={objectFromStateArray.id} className="form__wrapper">
            <label className="form__label" htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
            <input className="form__input" onChange={onInputChanged} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value}/>
        </div>);
    })

    //Dit past de state aan wanneer er een verandering is geplaatst in de input
    const submit = (event) => {
        // Dit zorgt ervoor dat de pagina niet refreshed
        event.preventDefault();
        // Hier worden alle pokemons data opgehaald en word er een functie van gemaakt
        let result = pokemons;
        // Hier word alle input aangepast
        inputs.forEach( input => {
            result = input.filter(input.value, result);
        });
        // Hier word verteld aan de disPatch dat het type "filteredpokemons" een payload result heeft
        dispatch({
            type: "FILTEREDPOKEMONS",
            payload: result
        })
    }

    return (
        <form className="formFilter" onSubmit={submit}>
            <div className="form__inputsWrapper">
            {inputsToBeRendered}
            </div>         
            <button className="form__search" onClick={submit}>Zoeken</button>
        </form>
    )
}

export default Form;