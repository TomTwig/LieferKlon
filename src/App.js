import Checkout from "./components/Checkout";
import ModalInfo from "./components/ModalInfo";
import Restaurant from "./components/Restaurant";
import ProductList from "./features/ProductList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ModalOrder from "./components/ModalOrder";

function App() {

  let showInfo = useSelector((store) => store.modals.isInfoShown);
  let showOrder = useSelector((store) => store.modals.isOrderShown);

  return (
    <div className="container">

      {showInfo && <ModalInfo />}
      {showOrder && <ModalOrder />}

      <div className="content">

        <div className="content__left">
          <img className="background__image" src="https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="background" />
          <Restaurant />
          <ProductList />
        </div>

        <div className="content__right">
          <Checkout />
        </div>

      </div>


    </div>
  );
}

export default App;
