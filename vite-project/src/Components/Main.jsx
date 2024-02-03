import { useDispatch, useSelector } from "react-redux"
import Homeitem from "./Homeitem"
import { useEffect } from "react";

import {fetchingaction} from '../store/fetchStatusSlice'
import {itemsaction} from '../store/ItemsSlice'
export default function Main(){
 const items= useSelector(store=>store.items)
 const fetchingstate=useSelector(store=>store.fetching);
 const dispatch=useDispatch();

 useEffect(()=>{
if(fetchingstate.fetchDone){
  const controller = new AbortController();
 const signal=controller.signal;
 dispatch(fetchingaction.markFetchingstated)
  fetch('http://localhost:8082/items',{signal})
  .then(res=>res.json())
  .then(({items})=>{
    dispatch(fetchingaction.markFetchingdone())
    dispatch(fetchingaction.markFetchingfinished)
   dispatch(itemsaction.addInitialItems(items[0]))
   
})
  return()=>{
    controller.abort();
  }
}
 },[fetchingstate])

  return(
    <main>
     
      {items.map((item,index)=>{
        return(
        <div key={index} className="items-container">
      <Homeitem item={item}/>
    </div>
     ) })}
   
</main>
  )
}