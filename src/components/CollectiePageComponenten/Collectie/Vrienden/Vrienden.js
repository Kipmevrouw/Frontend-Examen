import "./Vrienden.css";

const Vrienden = (props) => {


    return (
        <section className="vrienden__section">
            <h1 className="vrienden__h1">Vrienden:</h1>
            <img className="vrienden__img" src={"/img/" + props.imageForm} alt="Friend"/>
        </section>
);
}

export default Vrienden;