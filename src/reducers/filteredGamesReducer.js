const filteredGamesReducer = (state, action) => {
    // Als de state niet gevonden word laat hij een lege array achter
    if(state === undefined){
        return [];
    }
    // Als de type "filteredgames" is geeft hij een payload terug
    if(action.type === "FILTEREDGAMES"){
        return action.payload;
    }
    // Hier word de nieuwe state weer gestuurd
    return state;
}

export default filteredGamesReducer;