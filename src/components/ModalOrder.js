import deliveryTimes from "../deliveryTimes";
import { useDispatch, useSelector } from "react-redux";
import { closeOrder } from "../features/modalSlice"
import React from "react";
import { clearCart } from "../features/productsSlice";
import Smiley from "../svg/Smiley";


function ModalOrder() {
    const days = Object.keys(deliveryTimes);
    const dispatch = useDispatch();
    const total = useSelector((store) => store.products.total)

    const displayDeliveryTimes = days.map((day) => <div className="modal__delivery__card-row"  ><p>{day}</p> <p>{deliveryTimes[day]}</p></div>)

    const [sendOrder, setSendOrder] = React.useState(false);

    function handleClick() {
        setSendOrder(true);
        setTimeout(() => {
            setSendOrder(false);
            dispatch(closeOrder())
            dispatch(clearCart())
        }, 2000)
    }



    return (
        <aside className="modal-container">
            <div className="modal">

                {!sendOrder &&
                    <div className="order">
                        <h3>Bestellung abschließen</h3>
                        <p>Preis: {(total / 100).toFixed(2)} €</p>
                        <div className="order__buttons">
                            <button onClick={handleClick} className="btn">bestätigen</button>
                            <button onClick={() => dispatch(closeOrder())} className="btn">abbrechen</button>
                        </div>
                    </div>
                }

                {sendOrder &&
                    <div className="order__sucess">
                        <h2>Vielen Dank für deine Bestellung</h2>
                        <Smiley />
                    </div>
                }

            </div>
        </aside>
    )
}


export default ModalOrder;