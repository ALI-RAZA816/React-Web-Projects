import React from 'react'
import style from './Cloud.module.css'

export default function Cloud() {
    return (
        <div className = {style.mainCloudWrapper}>
            <div className="container">
                <div className={style.gridContainer}>
                    <div className={`${style.box} ${style.box1}`}>
                        <div>
                            <img src="/assets/images/featured-01.png" alt="" />
                        </div>
                        <span>Free Storage</span>
                    </div>
                    <div className={`${style.box} ${style.box2}`}>
                        <div>
                            <img src="/assets/images/featured-02.png" alt="" />
                        </div>
                        <span>Free Storage</span>
                    </div>
                    <div className={`${style.box} ${style.box3}`}>
                        <div>
                            <img src="/assets/images/featured-03.png" alt="" />
                        </div>
                        <span>Free Storage</span>
                    </div>
                    <div className={`${style.box} ${style.box4}`}>
                        <div>
                            <img src="/assets/images/featured-04.png" alt="" />
                        </div>
                        <span>Free Storage</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
