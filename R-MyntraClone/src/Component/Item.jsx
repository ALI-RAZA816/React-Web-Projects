import React from 'react';
import { CiStar } from "react-icons/ci";
import style from '../assets/css/Item.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from '../Store/BagSlice';


export default function Item({item}) {

  const bagItems = useSelector((store) => store.bagItems);
  const element = bagItems.indexOf(item.id) >=0
  const dispatch = useDispatch();
  const addToBag = ()=>{
    dispatch(bagActions.addtoBag(item.id));
  }
  const removeItem = () =>{
    dispatch(bagActions.removefromBag(item.id));
  }
  return (
    <div className={style.productCard}>
      <div className={style.productImage}>
        <img src={item.image} alt="" />
      </div>
      <div className={style.productContent}>
        <div className={style.rating}>
            <span>{item.rating.stars} <CiStar className={style.ratingStar}/></span>
            <span>{item.rating.count}</span>
        </div>
        <div>
        <h5 className={style.companyName}>{item.company}</h5>
        <p className={style.productDes}>{item.item_name}</p>
        </div>
        <div className={style.price}>
            <span className={style.currentPrice}>Rs {item.current_price}</span>
            <span className={style.originalPrice}>Rs {item.original_price}</span>
            <span className={style.discount}>({item.discount_percentage})</span>
        </div>
        { !element ? <button className={style.add} onClick={addToBag}>Add to Bag</button> :
        <button className={style.remove} onClick={removeItem}>Remove</button>}
      </div>
    </div>
  )
}
