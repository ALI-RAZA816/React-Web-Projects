import React from 'react'
import style from './ProductHero.module.css';
export default function ProductHero() {
    return (
        <div>
            <div className={style.heroBg}>
                <div className="container" id={style.container}>
                    <div className={style.heroContainer}>
                        <h1>Modern Warfare® II</h1>
                        <p>Home <i className='fa-solid fa-angle-right'></i> Shop <i className='fa-solid fa-angle-right'></i> Assasin Creed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
