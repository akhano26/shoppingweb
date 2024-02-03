import { useSelector } from "react-redux"


import BagSummary from "./BagSummary"
import Bagitem from "./Bagitem"
export default function Bag(){


  const bag=useSelector(store=>store.bag)
  const itemlist=useSelector(store=>store.items)
  
  const myitems=itemlist.filter(item=>{
    const itemindex=bag.indexOf(item.id)
    console.log(item.id,itemindex)
    return itemindex>=0
   } )
   
  return(
 <>
<main>
  <div className="bag-page">
    {myitems.map((item)=>{ 
      return(
    <div key={item.id} className="bag-items-container">
      
      <Bagitem item={item}/>
      
    </div>
    )
  })}
    <div className="bag-summary">
    <BagSummary/>
    </div>

  </div>
</main>

</>

  )
}