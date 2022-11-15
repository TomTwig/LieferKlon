
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";

import { useDispatch } from "react-redux";
import { calculateTotal, clearCart } from "../features/productsSlice";
import Basket from "../svg/Basket";
import { showOrder } from "../features/modalSlice"

function Checkout() {

    const dispatch = useDispatch();
    const products = useSelector((store) => store.products.products)
    const amount = useSelector((store) => store.products.amount)
    const total = useSelector((store) => store.products.total)
    const filterCart = products.filter((product) => product.amount >= 1);
    const displayCart = filterCart.map((product) => <CheckoutProduct key={product.id} product={product} />)

    return (

        <div className="checkout">
            <div className="checkout__list">
                <h2>Checkout</h2>


                {displayCart}
                {total > 0 && <hr></hr>}
            </div>

            {total === 0 && <div className="checkout__list-empty">

                <Basket />

                <h2>Warenkorb ist leer</h2>
            </div>}
            {total > 0 &&


                <div className="checkout__total">

                    <p>Summe:</p>
                    <p>{(total / 100).toFixed(2)}€</p>
                </div>
            }

            <div className="checkout__buttons">
                <button disabled={total === 0} className="btn order-button" onClick={() => dispatch(showOrder())}>bestellen</button>

                <button onClick={() => dispatch(clearCart())} className="btn">Warenkorb leeren</button>
            </div>

        </div>


    )
}


export default Checkout;