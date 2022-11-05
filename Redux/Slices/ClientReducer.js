import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { pathUrl } from "../../Config/env";
import { setData } from "./Snai3yReducer";

const ClientReducer = createSlice({
    name:"ClientData",
    initialState:{clintdata:{} , jops:[]},
    reducers:{
        setDataClient: (state,action)=>{
            state.clintdata = action.payload
        },
        setJops:(state , acthion)=>{
            state.jops.push(acthion.payload)
        }
    }
})

let  id = '';
AsyncStorage.getItem("id").then((res)=> id = res)

export const getDataClient = ()=> async (dispatch)=>{
    const res = await axios.get(`${pathUrl}/client/clients/${id}`)

    dispatch(setDataClient(res.data.Data))
    dispatch(setJops(res.data.Data.jops))
    // console.log(res.data.Data)
}

export const {setDataClient , setJops} = ClientReducer.actions

export default ClientReducer.reducer