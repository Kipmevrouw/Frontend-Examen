import "./Vrienden.css";

const Vrienden = (props) => {


    return (
        <section className="vrienden__section">
            <h1 className="vrienden__h1">Vrienden:</h1>
            <a href="/Collectiepage/daniele">
                <img className="vrienden__img"  href="/Collectiepage/daniele" src={"/img/" + props.imageForm} alt="Friend"/>
            </a>
        </section>
);
}

export default Vrienden;