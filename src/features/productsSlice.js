import { createSlice } from "@reduxjs/toolkit";
import products from "../products"


const initialState = {
    amount: 0,
    total: 0,
    isLoading: true,
    products: products,
    isFavorite: false,
    activeFilter: {
        showAll: true,
        showFavorites: false,
        showUnderTen: false,
        showPizza: false,
        showBurger: false,
        showSalad: false
    }

}

const productsSlice = createSlice({

    name: "products",
    initialState,
    reducers: {
        setAmount: (state, action) => {
            state.amount = action.payload
        },

        calculateTotal: (state, action) => {
            let totalPrice = 0;
            state.products.forEach((product) => totalPrice += (product.amount * product.price));
            state.total = totalPrice;
        },


        increaseAmount: (state, action) => {
            const selectedObject = state.products.find((product) => product.id === action.payload)
            selectedObject.amount += 1
            state.amount += 1;
        },
        decreaseAmount: (state, action) => {
            const selectedObject = state.products.find((product) => product.id === action.payload)
            state.amount -= 1;

            if (selectedObject.amount === 0) {
                selectedObject.amount = 0
            } else {
                selectedObject.amount -= 1
            }
        },


        // DRY comes later xD

        filterProducts: (state) => {
            state.activeFilter.showAll = true;
            state.activeFilter.showFavorites = false;
            state.activeFilter.showUnderTen = false;
            state.activeFilter.showBurger = false;
            state.activeFilter.showPizza = false;
            state.activeFilter.showSalad = false;
        },

        filterUnderTen: (state) => {
            state.activeFilter.showAll = false;
            state.activeFilter.showFavorites = false;
            state.activeFilter.showUnderTen = true
            state.activeFilter.showBurger = false;
            state.activeFilter.showPizza = false;
            state.activeFilter.showSalad = false;
        },
        filterFavorites: (state) => {
            state.activeFilter.showAll = false;
            state.activeFilter.showFavorites = true;
            state.activeFilter.showUnderTen = false;
            state.activeFilter.showBurger = false;
            state.activeFilter.showPizza = false;
            state.activeFilter.showSalad = false;
        },

        filterSalad: (state) => {
            state.activeFilter.showAll = false;
            state.activeFilter.showFavorites = false;
            state.activeFilter.showUnderTen = false;
            state.activeFilter.showBurger = false;
            state.activeFilter.showPizza = false;
            state.activeFilter.showSalad = true;
        },

        filterPizza: (state) => {
            state.activeFilter.showAll = false;
            state.activeFilter.showFavorites = false;
            state.activeFilter.showUnderTen = false;
            state.activeFilter.showBurger = false;
            state.activeFilter.showPizza = true;
            state.activeFilter.showSalad = false;
        },

        filterBurger: (state) => {
            state.activeFilter.showAll = false;
            state.activeFilter.showFavorites = false;
            state.activeFilter.showUnderTen = false;
            state.activeFilter.showBurger = true;
            state.activeFilter.showPizza = false;
            state.activeFilter.showSalad = false;
        },


        setFavorite: (state, action) => {
            const selectedProduct = state.products.find((product) => product.id === action.payload);
            if (selectedProduct.isFavorite) {
                selectedProduct.isFavorite = false
            } else {
                selectedProduct.isFavorite = true;
            }
        },

        clearCart: (state) => {
            state.products.forEach((product) => product.amount = 0);
            state.total = 0;
        }
    }


})


export default productsSlice.reducer;
export const { increaseAmount, decreaseAmount, setAmount, calculateTotal, filterFavorites, filterProducts,
    filterUnderTen, setFavorite, clearCart, filterBurger, filterPizza, filterSalad } = productsSlice.actions
