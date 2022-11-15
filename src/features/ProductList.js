import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAmount, calculateTotal, filterFavorites, filterProducts, filterUnderTen, filterBurger, filterPizza, filterSalad } from "./productsSlice";
import Product from "../components/Product";


function ProductList() {
    const dispatch = useDispatch()
    const products = useSelector((store) => store.products.products)
    const amount = useSelector((store) => store.products.amount)
    let filter = useSelector((store) => store.products.activeFilter)

    const displayItems = products.map((product) => <Product key={product.id} product={product} />);
    const displayFavorites = products.filter((product) => product.isFavorite);
    const displayUnderTen = products.filter((product) => product.price < 1000);
    const displayBurger = products.filter((product) => product.category === "burger");
    const displaySalad = products.filter((product) => product.category === "salad");
    const displayPizza = products.filter((product) => product.category === "pizza");

    React.useEffect(() => {
        dispatch(calculateTotal());

        let counter = 0;
        products.forEach(product => {

            counter += product.amount;
            dispatch(setAmount(counter))

        });

    }, [amount])


    return (
        <div className="products">

            <div className="filterButtons">
                <button className={`btn ${filter.showAll ? "fill" : ""}`} onClick={() => dispatch(filterProducts())}>Alle Produkte</button>
                <button className={`btn ${filter.showFavorites ? "fill" : ""}`} onClick={() => dispatch(filterFavorites())}>Meine Favoriten</button>
                <button className={`btn ${filter.showUnderTen ? "fill" : ""}`} onClick={() => dispatch(filterUnderTen())}>Unter 10€</button>
                <button className={`btn ${filter.showBurger ? "fill" : ""}`} onClick={() => dispatch(filterBurger())}>Burger</button>
                <button className={`btn ${filter.showSalad ? "fill" : ""}`} onClick={() => dispatch(filterSalad())}>Salate</button>
                <button className={`btn ${filter.showPizza ? "fill" : ""}`} onClick={() => dispatch(filterPizza())}>Pizza's</button>
            </div>

            <h2>Gerichte</h2>
            <div className="product__list">
                {filter.showAll && displayItems}
                {filter.showFavorites && displayFavorites.map((product) => <Product key={product.id} product={product} />)}
                {filter.showUnderTen && displayUnderTen.map((product) => <Product key={product.id} product={product} />)}
                {filter.showBurger && displayBurger.map((product) => <Product key={product.id} product={product} />)}
                {filter.showPizza && displayPizza.map((product) => <Product key={product.id} product={product} />)}
                {filter.showSalad && displaySalad.map((product) => <Product key={product.id} product={product} />)}
            </div>
        </div>
    )
}


export default ProductList;