import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./MijnPokemon.css";
import products from "../../data/products";
import { useState } from "react";

const MijnPokemon = ({headerText, buttonSymbol, buttonText, productCards, onButtonClicked, onProductCardClicked}) => {
    
    const [filter, setFilter] = useState("");
    
    let onCardClicked = (idFromCard) =>{
        onProductCardClicked(idFromCard);
    }


    let productCardsToBeRendered = productCards.map(product => {
        if(filter === ""){
            return <ProductCard onCardClicked={onCardClicked} key={product.id} id={product.id} name={product.name} productImg={product.img} productTag={product.tag}/>
        } else if(filter === product.tag){
            return <ProductCard onCardClicked={onCardClicked} key={product.id} id={product.id} name={product.name} productImg={product.img} productTag={product.tag}/>
        }
        
    });

    const onInputChanged = (event) => {
       setFilter(event.target.value)
    }

    return (
        <section className="productsWrapper">
            
            <header className="headerCollectie">
                <h1 className="headerCollectie__h1">Mijn pokemons </h1>
            </header>
            <div className="Collection__dropdown">
                        <select onChange={onInputChanged} className="dropdown__select">
                            <option value="" ></option>
                        {products.products.map(option => {
                            return (<option key={option.id} id={option.tag} value={option.tag}>{option.tag}</option>)
                        })}
                    </select>
            </div>
            <ul className="productsList">
                {productCardsToBeRendered}
            </ul>
        </section>
    );
}

export default MijnPokemon;