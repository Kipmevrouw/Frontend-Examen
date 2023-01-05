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
                <section className='contact__formulier'>
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
                </section>
                <section className='contact__vragen'>
                    <h1>Vragen?</h1>
                    <p>Stel gerust uw vragen via de contact form. 
                        WIj zullen u gerust helpen en wij hebben op alles een antwoord.
                        Wacht daarom niet te lang en kom snel met uw vraag. 
                    </p>
                    <br></br>
                    <p>We zijn geopend tussen 9:00 tot 18:00</p>
                </section>
                <section className='contact__img'>
                    <img src={"/img/" + this.props.imageF} alt="Foto van Becky."/>
                </section>
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