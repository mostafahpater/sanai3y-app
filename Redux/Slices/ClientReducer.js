import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { pathUrl } from "../../Config/env";
import { getImageUrl } from "../../Config/imageUrl";
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


export const getDataClient = (idd)=> async (dispatch)=>{
    const res = await axios.get(`${pathUrl}/client/clients/${idd}`)
    let imageUrl =  getImageUrl(res.data.Data.img)
    dispatch(setDataClient({...res.data.Data, img:imageUrl}))

    let jobsImg = getImageUrl(res.data.Data.jobs.image)
    dispatch(setJops({...res.data.Data.jobs, image: jobsImg}))
    console.log(res.data.Data)
}

export const {setDataClient , setJops} = ClientReducer.actions

export default ClientReducer.reducer