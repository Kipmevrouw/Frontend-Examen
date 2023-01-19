// Hier word de naam gefilterd
export const filterPokemonsByNaam = (naamToBeSearched, toBeSearchedArray) =>{
    return toBeSearchedArray.filter(pokemon => {
        // Dit zorgt ervoor als de input een letter of
        // woord match met de data. Verschijnd de betrefde pokemon
        if(pokemon.naam.toUpperCase().indexOf(naamToBeSearched.toUpperCase()) !== -1 ){
            return pokemon;
        }
    });
}
// Hier word de Soort gefilterd
export const filterPokemonsBySoort = (soortToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(pokemon => {
        // De soort word alleen laten zien als er een soort match is in de data
        // hier door zal er standaard niks te zien zijn als er geen match is
        let found = false;
        pokemon.soort.forEach(soort => {
            if(soort.toUpperCase() == soortToBeSearched.toUpperCase()){
                found = true;
            }
        });
        // Hier returned hij de soort als er een match is met de data
        if(found === true){
            return pokemon;
        }
    } );
}


