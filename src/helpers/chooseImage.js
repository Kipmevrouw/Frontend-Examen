import venusaurImage from "../img/venusaur.png";
import charizardImage from "../img/charizard.png";
import blastoiseImage from "../img/blastoise.png";
import dittoImage from "../img/ditto.png";

function chooseImage(inputFromPopup){
    let toBeAddedImage;
    switch(inputFromPopup){
        case("Venusaur"):
            toBeAddedImage = venusaurImage;
            break;
        case("Charizard"):
            toBeAddedImage = charizardImage;
            break;
        case("Blastoise"):
            toBeAddedImage = blastoiseImage;
            break;
        default:
            toBeAddedImage = dittoImage;
            break;
    }
    return toBeAddedImage;
}

export default chooseImage;
