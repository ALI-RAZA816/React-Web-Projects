import React from 'react'
import style from './Shop.module.css'

export default function Shop() {
  return (
    <div>
        <div className="container">
            <div className={style.shopGrid}>
                <div className={`${style.shop} ${style.box1}`}>
                    <span>Our Shop</span>
                    <h1>Go Pre-Order Buy & Get Best <span>Prices</span> For You!</h1>
                    <p>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
                    <button>Shop Now</button>
                </div>
                <div className={`${style.shop} ${style.box2}`}>
                    <img src="/assets/images/cta-bg.jpg" alt=""/>
                </div>
                <div className={`${style.shop} ${style.box3}`}>
                    <span>Newsletter</span>
                    <h1>Get Up To $100 Off Just Buy <span>Subscribe</span> Newsletter!</h1>
                    <div className={style.subscription}>
                        <input type="text" placeholder='Your email' name="" id="" />
                        <button>Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
