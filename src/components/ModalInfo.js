import deliveryTimes from "../deliveryTimes";
import { useDispatch } from "react-redux";
import { closeInfo } from "../features/modalSlice"


function ModalInfo() {
    const days = Object.keys(deliveryTimes);
    const dispatch = useDispatch();

    const displayDeliveryTimes = days.map((day) => <div className="modal__delivery__card-row"  ><p>{day}</p> <p>{deliveryTimes[day]}</p></div>)




    return (
        <aside className="modal-container">
            <div className="modal">


                <button className="btn close__button" onClick={() => dispatch(closeInfo())}>x</button>
                <h3>Über My Restaurant</h3>
                <h2>Adresse</h2>
                <div className="modal__delivery__card">
                    <p>Musterstraße 12</p>
                    <p>333444 Musterstadt</p>
                </div>
                
                

                <h2>Lieferzeiten</h2>
                <div className="modal__delivery__card">
                    
                    {displayDeliveryTimes}

                </div>
                <h2>Lieferkosten</h2>
                <div className="modal__delivery__card">
                    
                    <div className="modal__delivery__card-row"  >
                        <p>Mindestbestellwert</p>
                        <p>6,90€</p>
                    </div>

                    <div className="modal__delivery__card-row"  >
                        <p>Lieferkosten</p>
                        <p>1,20 €</p>
                    </div>
                </div>


            </div>

        </aside>

    )
}


export default ModalInfo;