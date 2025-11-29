import React from 'react'
import Cart from './Cart';
import style from '../assets/css/CartPage.module.css';
import CartSummary from './CartSummary';
import { useSelector } from 'react-redux';

export default function CartPage() {

  const bagItems = useSelector((store) => store.bagItems);
  const items = useSelector((store) => store.items);
  const findItems = items.filter(item => {
    const finalItems = bagItems.indexOf(item.id);
    return finalItems >=0
  });

  return (
    <div className={style.cart_page}>
      <div>
      {findItems.map(item => <Cart key = {item.id} item = {item} />)}
      </div>
      
      <div className="cart-summery">
        <CartSummary />
      </div>
    </div>
  )
}
