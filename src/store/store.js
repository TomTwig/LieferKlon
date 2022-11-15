import {configureStore} from "@reduxjs/toolkit"
import productsReducer from "../features/productsSlice";
import modalReducer from "../features/modalSlice"

export const store = configureStore({
reducer:{
    products: productsReducer,
    modals: modalReducer
}
})
 


