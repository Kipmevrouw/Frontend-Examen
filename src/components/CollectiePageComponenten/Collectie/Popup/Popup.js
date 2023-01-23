import React from "react";
import "./Popup.css";

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: this.props.cardClicked.name,
            currentCardId: this.props.cardClicked.id
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            input: nextProps.cardClicked.name,
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
            <section className="popup__center">
                <article className="popup">
                    <div className="popup__wrapper">
                        <img src={this.props.cardClicked.img} alt="card" className="popup__image"/>
                        <label htmlFor="name" className="popup__label">Naam</label>
                        <input onChange={this.input} value={this.state.input} type="text" className="popup__input"
                               id="name" disabled={!this.props.editable}/>
                    </div>
                </article>
            </section>
        );
    }
}

export default Popup;