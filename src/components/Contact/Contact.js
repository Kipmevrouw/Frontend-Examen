import React from 'react';
import "./Contact.css";
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    render() {
        return (
            <section className="contact__alles">
                <div >
                    <form className="contact__form" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <h2 className="contact__h2" >Contact</h2>
                            <div className="form-group">
                                <label className="contact__text" htmlFor="name">Naam</label>
                                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label className="contact__text" htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label className="contact__text" htmlFor="message">Bericht / vraag</label>
                                <textarea className="form-control" rows="1" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                            </div>
                            <button type="submit" className="contact__button">Verzenden</button>
                        </form>
                </div>
                <div className='contact__img'>
                    <img src={"/img/" + this.props.imageF} alt="Foto van Becky."/>
                </div>
            </section>
        );
    }
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
    handleSubmit(event) {
    }
}
export default Contact;