import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Popup.css";

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: this.props.cardClicked.name,
            input2: this.props.cardClicked.tag,
            currentCardId: this.props.cardClicked.id
        }
        
    }
    
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            input: nextProps.cardClicked.name,
            input2: nextProps.cardClicked.tag,
            currentCardId: nextProps.cardClicked.id
        })
    }

    input = (event) => {
        if (!this.props.editable) return
        this.setState({input: event.target.value});
        this.props.editButtonClicked(event.target.value);
    }

    render() {
        return (
                <article className="popup">
                    <div className="popup__wrapper">
                        <img src={this.props.cardClicked.img} alt="card" className="popup__image"/>
                        <label htmlFor="name" className="popup__label">Naam</label>
                        <input onChange={this.input} value={this.state.input} type="text" className="popup__input"
                               id="name" disabled={!this.props.editable}/>
                        <label htmlFor="Type" className="popup__label">Type</label>
                        <input value={this.state.input2} type="text" className="popup__tag2"
                               id="tag" />
                    </div>
                </article>
        );
    }
}

export default Popup;