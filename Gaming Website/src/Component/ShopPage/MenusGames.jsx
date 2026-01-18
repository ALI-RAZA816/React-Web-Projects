import React from 'react'
import style from './MenusGames.module.css'

export default function MenusGames({ShowAll, RacingMenuHandler, activeMenuHandler, AdventureMenuHandler ,StrategyMenuHandler}) {
    return (
        <div>
            <div className="container">
                <div className={style.menus}>
                    <ul>
                        <li onClick={activeMenuHandler} className={`${ShowAll === 'Show All'? `${style.active}` : ' '}`}>Show All</li>
                        <li onClick={AdventureMenuHandler} className={`${ShowAll === 'Adventure'? `${style.active}` : ' '}`}>Adventure</li>
                        <li onClick={StrategyMenuHandler} className={`${ShowAll === 'Strategy'? `${style.active}` : ' '}`}>Strategy</li>
                        <li onClick={RacingMenuHandler} className={`${ShowAll === 'Racing'? `${style.active}` : ' '}`}>Racing</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
