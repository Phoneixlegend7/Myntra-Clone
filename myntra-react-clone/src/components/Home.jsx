import { useDispatch,useSelector } from "react-redux"
import {addItemToBag,resetBag} from "../store/Bagslice"
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
const Home = ({item}) => {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();
  const bagCount = useSelector(store => store.bagStatus);

  const handleaddItemBag=  () => {
    dispatch(addItemToBag(item.id));
   
    setShowOptions(true);
  }

  const handleIncrementBag = () =>{
    dispatch(addItemToBag(item.id));
  }
  const handleRemoveFromBag =() =>{
    if (bagCount.bagCount <= 1) {
      // If the current count is 1, removing an item will result in 0
      dispatch(resetBag());
      setShowOptions(false); // Hide the options
    } else {
      // Otherwise, just decrease the count
      dispatch(resetBag());
    }
  }
  return (
    <div className="item-container">
      <img className="item-image" src= {item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!showOptions ? 
        <button className="btn-add-bag" onClick ={handleaddItemBag} >Add in Bag</button> : 
        <div className="add-remove-buttons">
          <button className="btn btn-success  buts" type="button" onClick={handleIncrementBag}>{<FaPlus />}</button>
          <button className="btn btn-danger  buts " type="button" onClick=  {handleRemoveFromBag}>{<FaMinus />}</button>
        </div>
      
      }
    </div>
  )
}

export default Home