import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isInfoShown: false,
    isOrderShown: false
}

const modalSlice = createSlice({

    name: "modals",
    initialState,
    reducers: {
        showInfo:(state)=>{
            state.isInfoShown = true;
        },
        closeInfo:(state)=>{
            state.isInfoShown = false
        },
        closeOrder:(state)=>{
            state.isOrderShown = false
        },
        showOrder:(state)=>{
            state.isOrderShown = true
        }
         }
    }
)


export default modalSlice.reducer;
export const {showInfo, closeInfo, closeOrder, showOrder } = modalSlice.actions

