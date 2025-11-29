import React from 'react'
import style from './MostPlayed.module.css'

export default function MostPlayed() {
    return (
        <div className={style.gamesMain}>
            <div className="container">
                <div className={style.heading}>
                    <span>Top Games</span>
                    <h1>Most Played<button>View All</button></h1>
                </div>
                <div className={style.gamesGrid}>
                    <div className={`${style.box} ${style.box1}`}>
                        <div>
                            <img src="/assets/images/top-game-01.jpg" alt="" />
                        </div>
                       <div>
                            <span>Adventure</span>
                            <h2>Assasin Creed</h2>
                            <button>Explore</button>
                        </div>
                    </div>
                    <div className={`${style.box} ${style.box1}`}>
                        <div>
                            <img src="/assets/images/top-game-02.jpg" alt="" />
                        </div>
                       <div>
                            <span>Adventure</span>
                            <h2>Assasin Creed</h2>
                            <button>Explore</button>
                        </div>
                    </div>
                    <div className={`${style.box} ${style.box1}`}>
                        <div>
                            <img src="/assets/images/top-game-03.jpg" alt="" />
                        </div>
                        <div>
                            <span>Adventure</span>
                            <h2>Assasin Creed</h2>
                            <button>Explore</button>
                        </div>
                    </div>
                    <div className={`${style.box} ${style.box1}`}>
                        <div>
                            <img src="/assets/images/top-game-04.jpg" alt="" />
                        </div>
                       <div>
                            <span>Adventure</span>
                            <h2>Assasin Creed</h2>
                            <button>Explore</button>
                        </div>
                    </div>
                    <div className={`${style.box} ${style.box1}`}>
                        <div>
                            <img src="/assets/images/top-game-05.jpg" alt="" />
                        </div>
                       <div>
                            <span>Adventure</span>
                            <h2>Assasin Creed</h2>
                            <button>Explore</button>
                        </div>
                    </div>
                    <div className={`${style.box} ${style.box1}`}>
                        <div>
                            <img src="/assets/images/top-game-06.jpg" alt="" />
                        </div>
                        <div>
                            <span>Adventure</span>
                            <h2>Assasin Creed</h2>
                            <button>Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
