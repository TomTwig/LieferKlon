import { useDispatch } from "react-redux"

function CheckoutProduct({ product }) {

    const dispatch = useDispatch()

    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct_info">
                <p>{product.amount}x</p>
                <h4>{product.name}</h4>
            </div>
            <div className="checkoutProduct_price">
                <p>{((product.amount * product.price) / 100).toFixed(2)}€</p>
            </div>
        </div>
    )
}

export default CheckoutProduct