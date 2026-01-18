import React from 'react';
import style from '../ContactPage/ContactHero.module.css'

export default function ContactHero() {
    return (
        <div>
            <div className={style.heroBg}>
                <div className="container" id={style.container}>
                    <div className={style.heroContainer}>
                        <h1>Contact us</h1>
                        <p>Home <i className='fa-solid fa-angle-right'></i>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
