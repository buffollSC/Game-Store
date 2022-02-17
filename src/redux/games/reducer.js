import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentGame: null
}
const gamesSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setCurrenGame: (state, action) => {
            state.currentGame = action.payload;  
        }
    }
});
export const { setCurrenGame } = gamesSlice.actions;
export default gamesSlice.reducer;