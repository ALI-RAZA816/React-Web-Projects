import React from 'react'
import style from './HeroSection.module.css'
import Cloud from './Cloud'

export default function HeroSection() {
    return (
        <div>
            <div className={style.heroBg}>
                <div className="container" id={style.container}>
                    <div className={style.heroContainer}>
                        <div className={style.heroContent}>
                            <div>
                                <span>Welcome to lugx</span>
                                <h1><img src="/assets/images/caption-dec.png" alt="" />Best gaming site ever!</h1>
                                <p>LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming website. You can download and use this layout for commercial purpose. Pleaes tell your friends about TemplateMo. </p>
                            </div>
                            <div className={style.field}>
                                <input type="text" placeholder='Type Something' />
                                <button>Search Now</button>
                            </div>
                        </div>
                        <div className={style.heroImg}>
                            <img src="/assets/images/banner-image.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Cloud/>
        </div>
    )
}
