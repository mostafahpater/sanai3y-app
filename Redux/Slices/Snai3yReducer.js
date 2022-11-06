import AsyncStorage from "@react-native-async-storage/async-storage";
import {  createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
import { pathUrl } from "../../Config/env";

export const Snai3yReducer = createSlice({
    name:"Snai3yData",
    initialState:{data:{}},
    reducers:{
        setData: (state,action)=>{

            // console.log("jjiijjijii")
            state.data=action.payload
        },
        logOutSnai3y:(state)=>{
            state.data.status = "busy"
        }
        
    }
})

let  id = '';
AsyncStorage.getItem("id").then((res)=> id = res)
console.log(id)
export const getSnai3y =()=> async (dispatch) =>{
        const res = await axios.get(`${pathUrl}/sanai3y/sanai3ies/${id}`);
        // console.log(res.data.Data);
        dispatch(setData(res.data.Data));
}



export const {setData,logOutSnai3y} = Snai3yReducer.actions
// export const showSnai3yData = (state)=> state.Snai3yData.data
export default Snai3yReducer.reducer