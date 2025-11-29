import React from 'react'
import style from './ShopHeroSection.module.css';
export default function ShopHeroSection() {
    return (
        <div>
            <div className={style.heroBg}>
                <div className="container" id={style.container}>
                    <div className={style.heroContainer}>
                        <h1>Our Shop</h1>
                        <p>Home <i className='fa-solid fa-angle-right'></i> Shop</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
