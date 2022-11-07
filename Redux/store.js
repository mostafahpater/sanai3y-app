import { configureStore } from "@reduxjs/toolkit"
import ClientReducer from "./Slices/ClientReducer"
import currentRecieverReducer from "./Chat/ImageUrlSlicer"
import Snai3yReducer from "./Slices/Snai3yReducer"
export const Store = configureStore({
    reducer:
    {
        Snai3yReducer,
        ClientReducer,
        currentRecieverReducer
    },

})//tyh56hj5