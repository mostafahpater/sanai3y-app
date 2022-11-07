import { configureStore } from "@reduxjs/toolkit"
import ClientReducer from "./Slices/ClientReducer"
import Snai3yReducer from "./Slices/Snai3yReducer"
import currentRecieverReducer from './Chat/ImageUrlSlicer'
export const Store = configureStore({
    reducer:
    {
        Snai3yReducer,
        ClientReducer,
        currentRecieverReducer
    },

})