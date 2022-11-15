import { useDispatch } from "react-redux"
import { increaseAmount, decreaseAmount, setFavorite } from "../features/productsSlice";
import ChevronDown from "../svg/ChevronDown";
import ChevronUp from "../svg/ChevronUp";
import Heart from "../svg/Heart";


function Product({ product }) {

    const dispatch = useDispatch()

    return (
        <div className="product">
            <div className="product__info">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>{((product.price) / 100).toFixed(2)} €</p>
            </div>

            <div className="product__picture">
                <img src={product.img}></img>
            </div>

            <div>
                <button onClick={() => dispatch(setFavorite(product.id))}>
                    {product.isFavorite && <Heart style={{ color: "red" }} fill={"red"} />}
                    {!product.isFavorite && <Heart fill={"none"} />}
                </button>
            </div>


            <div className="product__select">
                <button onClick={() => dispatch(increaseAmount(product.id))}><ChevronUp /></button>
                <p>{product.amount}</p>
                {product.amount >= 1 && <button onClick={() => dispatch(decreaseAmount(product.id))}><ChevronDown /></button>}
            </div>
        </div>
    )
}


export default Product