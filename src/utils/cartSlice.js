import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items: [],
    },
    reducers : {
        addToCart : (state, action) =>  {
            state.items.push(action.payload);
        },
        removeFromCart: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export default cartSlice.reducer;

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions; 