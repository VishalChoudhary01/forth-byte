import { createSlice } from "@reduxjs/toolkit";
const  savedTheme=localStorage.getItem("dark") === "true" 

const initialState={
    DarkMode: savedTheme || false,
}


export const themeSlice=createSlice({
    name: "theme",
    initialState,
    reducers:{
        toggleDarkMode: (state) => {
            state.DarkMode = !state.DarkMode;
        },
    },
})

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;