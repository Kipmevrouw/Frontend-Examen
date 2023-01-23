import React from "react";
import NavbarFilter from "../NavbarFilter/NavbarFilter";
import MijnPokemon from "../MijnPokemon/MijnPokemon";
import Popup from "../Popup/Popup";
import chooseImage from "../../helpers/chooseImage";
import productsObject from "../../data/products";
import navigationItemsObject from "../../data/navigationItems";
import "./Dashboard.css";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productCards: [],
            open: true,
            cardClicked: {},
            editMode: false,
            allowEdit: false
        };
    }

    componentDidMount() {
        this.setState({productCards: productsObject.products});
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
                <section>
                    <NavbarFilter navigationListItems={navigationItemsObject.navigationItems}></NavbarFilter>
                    <MijnPokemon onProductCardClicked={this.onCardClicked} onButtonClicked={this.onButtonClicked}
                                 productCards={this.state.productCards} headerText="Mijn Producten"></MijnPokemon>
                </section>
                <section>
                    <button onClick={this.toggleEditMode} className="dashboard__button">Toggle edit mode</button>
                    <Popup editable={this.state.allowEdit} editButtonClicked={this.editButtonClicked}
                           editMode={this.state.editMode} cardClicked={this.state.cardClicked}
                           addButtonClicked={this.addButtonClicked}/>
                </section>
            </article>
        );
    }
}


export default Dashboard;