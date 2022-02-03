import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
    name: 'game',
    initialState: {
        currentGame:null
    },
    reducers: {
        setCurrenGame: (state, action) => {
            state.currentGame = action.payload;  
        }
    }
});

export const { setCurrenGame } = gamesSlice.actions;
export default gamesSlice.reducer;