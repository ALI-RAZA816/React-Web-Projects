import React from 'react'
import { ImCross } from "react-icons/im";
import style from '../assets/css/Cart.module.css';
import { useDispatch } from 'react-redux';
import { bagActions } from '../Store/BagSlice';


export default function Cart({item}) {

  const dispatch = useDispatch();
  const removeFromBag = () =>{
    dispatch(bagActions.removefromBag(item.id));
  }

  return (
    <div className={style.cart} style={{marginBottom:'.8rem'}}>
      <div className={style.cartproductImage}>
        <img src={item.image} alt="" />
      </div>
      <div className={style.cartproductDetail} style={{marginRight:'.5rem'}}>
        <span className={style.companyName}>{item.company}</span>
        <span className={style.productDes}>{item.item_name}</span>
        <div className="price" style={{marginBottom:'.3rem'}}>
            <span className={style.currentPrice}>$ {item.current_price}</span>
            <span className={style.originalPrice}>$ {item.original_price}</span>
            <span className={style.discount}>($ {item.discount_percentage} OFF)</span>
        </div>
        <p className={style.returnTime}><span>{item.return_period} days</span> return availablity</p>
        <p className={style.deliveryTime}>Delivery by <span>{item.delivery_date}</span></p>
      </div>
        <ImCross onClick={removeFromBag} style={{color:'#4A4A4A',cursor:'pointer',position:'absolute',top:'10px',right:'10px'}} />
    </div>
  )
}
