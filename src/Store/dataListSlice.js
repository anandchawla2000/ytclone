import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const dataListSlice=createSlice({
    name:"data",
    initialState:{
        data:[],
    },
    reducers:{
        setData(state,action){
            state.data=action.payload;
        }
    }
})

export const {setData}=dataListSlice.actions;
export default dataListSlice.reducer;

export function fetchdata(){
    return async function datalayo(dispatch,getState){
        const url="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=AIzaSyCKTbBJydQdeOPpb0WJYTILvuibHb91lEg";
        const data =await axios.get(url);
        dispatch(setData(data.data.items));
    }
}

export function fetchdatabyurl(name){
    return async function datalayoUrl(dispatch,getState){
        // console.log(name)
        if(name==""){dispatch(fetchdata())}
        const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${name}&key=AIzaSyCKTbBJydQdeOPpb0WJYTILvuibHb91lEg`;
        const data =await axios.get(url);
        dispatch(setData(data.data.items));
    }
}
