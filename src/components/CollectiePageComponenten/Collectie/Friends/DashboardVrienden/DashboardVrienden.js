import React from "react";
import MijnPokemonVrienden from "../MijnPokemonVrienden/MijnPokemonVrienden";
import Popup from "../../Popup/Popup";
import productsVriendenObject from "../../../data/productsVrienden";
import Vrienden from "../Vrienden/Vrienden"
import "./DashboardVrienden.css";

class DashboardVrienden extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productCards: [],
            open: true,
            cardClicked: {},
            editMode: false,
            allowEdit: false,
            
        };
    }

    componentDidMount() {
        let eersteCardAan = true 
        let eersteCardId = -1
        productsVriendenObject.productsVrienden.map(product => {
            if(eersteCardAan){
                eersteCardId = product.id
                eersteCardAan = false
            }
        });
        this.setState({productCards: productsVriendenObject.productsVrienden}, () => {
            this.onCardClicked(eersteCardId);
        });
    }

    onButtonClicked = () => {
        this.setState({open: !this.state.open})
    }

    editButtonClicked = (inputFromPopup) => {
        let productCards = this.state.productCards;
        let newState = productCards.map(product => {
            if (this.state.cardClicked.id === product.id) {
                product.name = inputFromPopup;
                return product;
            } else {
                return product;
            }
        });
        this.setState({productCards: newState, open: true});
    }

    onCardClicked = (idFromCard) => {
        this.setState({
            editMode: true,
            open: !this.state.open,
            cardClicked: this.state.productCards[idFromCard - 1],
        });
    }

    toggleEditMode = () => {
        this.setState({allowEdit: !this.state.allowEdit});
    }

    render() {
        return (
            <article className="dashboardVrienden">
                <section className="dashboardVrienden__grid1">
                </section>
                <section className="dashboardVrienden__grid2">
                    <MijnPokemonVrienden productCards={this.state.productCards} headerText="Daniele's Producten"></MijnPokemonVrienden>
                </section>
                <section className="dashboardVrienden__grid3">
                    <Vrienden imageForm="friend.jpg"/>
                </section>
            </article>
        );
    }
}


export default DashboardVrienden;