import React from 'react'
import style from './Categories.module.css'

export default function Categories() {
    return (
        <div>
            <div className="container">
                <div className={style.heading}>
                    <span>Categories</span>
                    <h1>Top Catogeries</h1>
                </div>
                <div className={style.gamesGrid}>
                    <div className={`${style.box} ${style.box1}`}>
                        <h1>Action</h1>
                        <div>
                            <img src="/assets/images/top-game-01.jpg" alt="" />
                        </div>
                    </div>
                    <div className={`${style.box} ${style.box1}`}>
                        <h1>Action</h1>
                        <div>
                            <img src="/assets/images/top-game-02.jpg" alt="" />
                        </div>
                    </div>
                    <div className={`${style.box} ${style.box1}`}>
                        <h1>Action</h1>
                        <div>
                            <img src="/assets/images/top-game-03.jpg" alt="" />
                        </div>
                    </div>
                    <div className={`${style.box} ${style.box1}`}>
                        <h1>Action</h1>
                        <div>
                            <img src="/assets/images/top-game-04.jpg" alt="" />
                        </div>
                    </div>
                    <div className={`${style.box} ${style.box1}`}>
                        <h1>Action</h1>
                        <div>
                            <img src="/assets/images/top-game-05.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
