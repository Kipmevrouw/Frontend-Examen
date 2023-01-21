const filteredPokemonsReducer = (state, action) => {
    // Als de state niet gevonden word laat hij een lege array achter
    if(state === undefined){
        return [];
    }
    // Als de type "filteredPokemons" is geeft hij een payload terug
    if(action.type === "FILTEREDPOKEMONS"){
        return action.payload;
    }
    // Hier word de nieuwe state weer gestuurd
    return state;
}

export default filteredPokemonsReducer;