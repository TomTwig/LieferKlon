import Basket from "../svg/Basket";
import Clock from "../svg/Clock";
import House from "../svg/House";
import Star from "../svg/Star";
import { useDispatch } from "react-redux";
import { showInfo } from "../features/modalSlice"
import Info from "../svg/Info";


function Restaurant() {
    const dispatch = useDispatch();
    return (

        <div className="restaurant">
            <div className="restaurant__info" >
                <div className="restaurant__info__title">
                    <h1 className="restaurant__name">My Restaurant</h1>
                    <div className="restaurant__buttons">
                        <button className="btn" onClick={() => dispatch(showInfo())}><Info /></button>
                    </div>
                </div>

                <div className="restaurant__rating">
                    <Star />
                </div>
                <ul className="restaurant__info__delivery">

                    <li className="restaurant__info__delivery__time">
                        <Clock />
                        <p>30 - 55min</p>
                    </li>

                    <li className="restaurant__info__delivery__price">
                        <House />
                        <p>1.20 €</p>
                    </li>

                    <li className="restaurant__info__delivery__value">
                        <Basket />
                        <p>Min. 6.80€</p>
                    </li>

                </ul>
            </div>







        </div>
    )
}

export default Restaurant