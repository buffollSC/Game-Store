import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentGame: null,
    videoUrl: null
}
const gamesSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setCurrenGame: (state, action) => {
            state.currentGame = action.payload;  
        },
        setVideoURL: (state, action) => {
            state.videoUrl = action.payload;  
        }
    }
});
export const { setCurrenGame, setVideoURL } = gamesSlice.actions;
export default gamesSlice.reducer;