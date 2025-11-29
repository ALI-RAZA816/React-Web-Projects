import React from 'react'
import style from '../assets/css/CartSummary.module.css';
import { useSelector } from 'react-redux';

export default function CartSummary() {
    const bagItems = useSelector((store) => store.bagItems);
    const items = useSelector((store) => store.items);
    const findItems = items.filter(item => {
        const finalItems = bagItems.indexOf(item.id);
        return finalItems >= 0
    });

    const OriginalPrice = findItems.reduce((acc, curr) => {
        return acc + curr.original_price;
    },0);
    const currentPrice = findItems.reduce((acc, curr) => {
        return acc + curr.current_price;
    },0);

    const CONVIENCE_FEE = 99
    const totalMRP = OriginalPrice;
    const totalDiscount = OriginalPrice - currentPrice;
    const finalPayment = totalMRP - totalDiscount + CONVIENCE_FEE;

    return (
        <div className={style.cartSummary} style={{ paddingRight: '.5rem' }}>
            <span>Price Details ({bagItems.length} Items)</span>
            <div>
                <div className={`${style.box} MRP`}>
                    <span>Total MRP</span>
                    <span>$ {totalMRP}</span>
                </div>
                <div className={`${style.box} discount`}>
                    <span>Discount on MRP</span>
                    <span>$ {totalDiscount}</span>
                </div>
                <div className={`${style.box} fee`}>
                    <span>Convenince Fee</span>
                    <span>$ {CONVIENCE_FEE}</span>
                </div>
            </div>
            <hr />
            <div className={style.total}>
                <span>Total Amount</span>
                <span>$ {finalPayment}</span>
            </div>
            <button>Place Order</button>
        </div>
    )
}
