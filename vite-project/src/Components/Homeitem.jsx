import { useDispatch, useSelector } from "react-redux"

import { bagitemaction} from '../store/bagitem'

export default function Homeitem({item}){
  
  const baglist=useSelector(store=>store.bag);
const isitem=baglist.indexOf(item.id) >=0;
 var dispatch= useDispatch();

  const addToBag=(id)=>{
       dispatch(bagitemaction.addtobag(id))
  }
  const removeformBag=(id)=>{
    dispatch(bagitemaction.removefrombag(id))
  }


  return(
  
    <div  className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">{item.discount_percentage}% OFF</span>
      </div>
      {!isitem?(
      <button type="button" onClick={()=>addToBag(item.id)} className="btn btn-add-bag btn-success">Success</button>):(
      <button type="button" onClick={()=>removeformBag(item.id)} className="btn btn-add-bag btn-danger">Remove</button>)}
    </div>
   
  )
}