import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itensInCart: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItemInCart: (state, action) => {
            state.itensInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itensInCart = state.itensInCart.filter(game => game.id !== action.payload)
        }
    }
});
export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;