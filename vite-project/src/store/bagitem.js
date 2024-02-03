

import { createSlice } from "@reduxjs/toolkit";


const bagitemslice=createSlice({
  name:'bagitem',
  initialState:[],
  reducers:{
    addtobag:(state,action)=>{
      state.push(action.payload);
    },
    removefrombag:(state,action)=>{
      return state.filter(item=> item!=action.payload)
    }

  }
})
export const bagitemaction=bagitemslice.actions;
export default bagitemslice;