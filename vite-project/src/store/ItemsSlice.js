
import { createSlice } from "@reduxjs/toolkit";





const ItemsSlice=createSlice({
  name:'items',
  initialState:[],
  reducers:{
    addInitialItems:(store,action)=>{
      return action.payload;
    }
  }
})
export const itemsaction=ItemsSlice.actions;
export default ItemsSlice;