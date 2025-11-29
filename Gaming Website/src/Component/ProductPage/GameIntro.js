import React from 'react'
import style from '../ProductPage/GameIntro.module.css'
export default function GameIntro() {
    return (
        <div>
            <div className="container">
                <div className={style.gameGrid}>
                    <div className={style.img}>
                        <img src="/assets/images/single-game.jpg" alt="" />
                    </div>
                    <div>
                        <h1>
                            Call of Duty®: Modern Warfare® II
                        </h1>
                        <div className={style.price}>
                            <span style={{fontSize:'16px' ,fontWeight:'bold',textDecoration:'line-through',color:'#e0e0e0ff'}}>$28</span>
                            <span>$22</span>
                        </div>
                        <p>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
                        <div className={style.fields}>
                            <input min={0} type="number" placeholder='1' />
                            <button><i className='fa-solid fa-bag-shopping'></i>Add to cart</button>
                        </div>
                        <div className={style.gameDetail}>
                            <div className={style.gameId}>
                                <div>
                                    <span>Game ID:</span>
                                </div>
                                <div>
                                    <span>COD MMII</span>
                                </div>
                            </div>
                            <div className={style.gameId}>
                                <div>
                                    <span>Genre:</span>
                                </div>
                                <div>
                                    <span>Action, Team,  Single</span>
                                </div>
                            </div>
                            <div className={style.gameId}>
                                <div>
                                    <span>Multi-tags:</span>
                                </div>
                                <div>
                                    <span>War, Battle, Royal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
