import { configureStore} from "@reduxjs/toolkit";
import bagitemslice from "./bagitem";
import ItemsSlice from './ItemsSlice';
import fetchstatusslice from "./fetchStatusSlice";




const store = configureStore({
  reducer:{
    items:ItemsSlice.reducer,
    fetching:fetchstatusslice.reducer,
    bag:bagitemslice.reducer
  }
})

export default store;