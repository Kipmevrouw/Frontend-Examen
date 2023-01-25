import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./MijnPokemon.css";

const MijnPokemon = ({headerText, buttonSymbol, buttonText, productCards, onButtonClicked, onProductCardClicked}) => {
    let onCardClicked = (idFromCard) =>{
        onProductCardClicked(idFromCard);
    }


    let productCardsToBeRendered = productCards.map(product => {
        return <ProductCard onCardClicked={onCardClicked} key={product.id} id={product.id} name={product.name} productImg={product.img} productTag={product.tag}/>
        
    });


    return (
        <section className="productsWrapper">
            
            <header className="headerCollectie">
                <h1 className="headerCollectie__h1">Mijn producten</h1>
            </header>
            <ul className="productsList">
                {productCardsToBeRendered}
            </ul>
        </section>
    );
}

export default MijnPokemon;