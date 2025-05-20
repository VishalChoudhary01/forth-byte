import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./featuresSlice/themeSlice";

const store = configureStore({
    reducer:{
        theme:themeReducer
    }
})


store.subscribe(() => {
  localStorage.setItem("dark", JSON.stringify(store.getState().theme.DarkMode));
});


export default store;