
import { createSlice } from "@reduxjs/toolkit";

const fetchstatusslice=createSlice({
  name:'items',
  initialState:{
    fetchDone:true,
    currentlyFetching:false
  },
  reducers:{
    markFetchingdone:(state)=>{
      return !state.fetchDone;
    },
    markFetchingstated:(state)=>{
      return state.currentlyFetching=true;
    },
    markFetchingfinished:(state)=>{
      return state.currentlyFetching=false;
    }
  }
})
export const fetchingaction=fetchstatusslice.actions;
export default fetchstatusslice;