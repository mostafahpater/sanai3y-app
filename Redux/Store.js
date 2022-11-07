import { configureStore } from "@reduxjs/toolkit"
import ClientReducer from "./Slices/ClientReducer"
import Snai3yReducer from "./Slices/Snai3yReducer"
export const Store = configureStore({
    reducer:
    {
        Snai3yReducer,
        ClientReducer
    },

})