import "./ProductCard.css"
const ProductCard = (props) => {

    const productCardClicked = () => {
        props.onCardClicked(props.id);
    }
    return (
        <li onClick={productCardClicked} className="productsList__item productsList__item--gray">
            <img className="productsList__img" src={props.productImg} alt={props.name} />
            <div className="productsList__fade">
                <p className="productsList__imageText productsList__imageText--name">{props.name}</p>
            </div>
            <div className="productsList__fade">
                <p className="productsList__imageText">{props.productTag}</p>
            </div>
        </li>
    );
}

export default ProductCard;