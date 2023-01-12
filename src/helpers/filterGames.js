// Hier word de naam gefilterd
export const filterGamesByNaam = (naamToBeSearched, toBeSearchedArray) =>{
    return toBeSearchedArray.filter(game => {
        // Dit zorgt ervoor als de input een letter of
        // woord match met de data. Verschijnd de betrefde game
        if(game.naam.toUpperCase().indexOf(naamToBeSearched.toUpperCase()) !== -1 ){
            return game;
        }
    });
}
// Hier word de Soort gefilterd
export const filterGamesBySoort = (soortToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        // De soort word alleen laten zien als er een soort match is in de data
        // hier door zal er standaard niks te zien zijn als er geen match is
        let found = false;
        game.soort.forEach(soort => {
            if(soort.toUpperCase() == soortToBeSearched.toUpperCase()){
                found = true;
            }
        });
        // Hier returned hij de soort als er een match is met de data
        if(found === true){
            return game;
        }
    } );
}


