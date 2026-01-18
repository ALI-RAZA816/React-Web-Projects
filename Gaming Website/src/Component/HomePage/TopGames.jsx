import React from 'react';
import style from './TopGames.module.css'


export default function TopGames() {
    return (
        <div className={style.gamesMain}>
            <div className="container">
                <div className={style.heading}>
                    <span>Trending</span>
                    <h1>Trending Games <button>View All</button></h1>
                </div>
                <div className={style.gamesGrid}>
                    <div className={`${style.box} ${style.box1}`}>
                        <div>
                            <img src="/assets/images/trending-01.jpg" alt="" />
                        </div>
                        <div>
                            <span>Action</span>
                            <h2>Assasin Creed <i class="fa-solid fa-bag-shopping"></i></h2>
                        </div>
                        <div className={style.price}>
                            <span style={{textDecoration:'line-through'}}>$28</span>
                            <span>$20</span>
                        </div>
                    </div>
                    <div className={`${style.box} ${style.box1}`}>
                        <div>
                            <img src="/assets/images/trending-02.jpg" alt="" />
                        </div>
                        <div>
                            <span>Action</span>
                            <h2>Assasin Creed <i class="fa-solid fa-bag-shopping"></i></h2>
                        </div>
                        <div className={style.price}>
                            <span>$44</span>
                        </div>
                    </div>
                    <div className={`${style.box} ${style.box1}`}>
                        <div>
                            <img src="/assets/images/trending-03.jpg" alt="" />
                        </div>
                        <div>
                            <span>Action</span>
                            <h2>Assasin Creed <i class="fa-solid fa-bag-shopping"></i></h2>
                        </div>
                        <div className={style.price}>
                            <span style={{textDecoration:'line-through'}}>$64</span>
                            <span>$44</span>
                        </div>
                    </div>
                    <div className={`${style.box} ${style.box1}`}>
                        <div>
                            <img src="/assets/images/trending-04.jpg" alt="" />
                        </div>
                        <div>
                            <span>Action</span>
                            <h2>Assasin Creed <i class="fa-solid fa-bag-shopping"></i></h2>
                        </div>
                        <div className={style.price}>
                            <span>$32</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
