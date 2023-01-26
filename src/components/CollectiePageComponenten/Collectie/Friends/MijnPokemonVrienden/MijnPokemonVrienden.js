import { useEffect } from "react";
import ProductCardVrienden from "../ProductCardVrienden/ProductCardVrienden";
import "./MijnPokemonVrienden.css";

const MijnPokemonVrienden = ({headerText, buttonSymbol, buttonText, productCards, onButtonClicked, onProductCardClicked}) => {
let productCardsToBeRendered = productCards.map(product => {
        return <ProductCardVrienden key={product.id} id={product.id} name={product.name} productImg={product.img} productTag={product.tag}/>
        
    });


    return (
        <section className="productsWrapper">
            
            <header className="headerCollectie">
                <h1 className="headerCollectie__h1">Daniele's pokemons</h1>
            </header>
            <ul className="productsList">
                {productCardsToBeRendered}
            </ul>
        </section>
    );
}

export default MijnPokemonVrienden;