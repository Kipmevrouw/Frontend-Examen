import React from "react";
import MijnPokemon from "../MijnPokemon/MijnPokemon";
import Popup from "../Popup/Popup";
import productsObject from "../../data/products";
import Vrienden from "../Friends/Vrienden/Vrienden"
import "./Dashboard.css";

class Dashboard extends React.Component {

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
        productsObject.products.map(product => {
            if(eersteCardAan){
                eersteCardId = product.id
                eersteCardAan = false
            }
        });
        this.setState({productCards: productsObject.products}, () => {
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
            <article className="dashboard">
                <section className="dashboard__grid1">
                </section>
                <section className="dasboard__grid2">
                    <Popup editable={this.state.allowEdit} editButtonClicked={this.editButtonClicked}
                           editMode={this.state.editMode} cardClicked={this.state.cardClicked}
                           addButtonClicked={this.addButtonClicked}/>
                    <button onClick={this.toggleEditMode} className="dashboard__button">Pas pokemon naam aan</button>
                </section>
                <section className="dasboard__grid3">
                    <MijnPokemon onProductCardClicked={this.onCardClicked} onButtonClicked={this.onButtonClicked}
                                 productCards={this.state.productCards} headerText="Mijn Producten"></MijnPokemon>
                </section>
                <section className="dasboard__grid4">
                    <Vrienden imageForm="friend.jpg"/>
                </section>
            </article>
        );
    }
}


export default Dashboard;