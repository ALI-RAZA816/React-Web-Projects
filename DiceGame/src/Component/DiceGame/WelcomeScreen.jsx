import React, { useContext } from 'react'
import style from '../../assets/css/WelcomeScreen.module.css';
import ContextProvider from '../ContextStore/ContextProvider';

export default function WelcomeScreen( ) {

    const { showPageHandler } = useContext(ContextProvider);
    
    return (
        <div className={style.welcomeScreenContainer}>
            <div className={style.leftBox}>
                <img src="/images/dices 1.png" alt="" />
            </div>
            <div className={style.rightBox}>
                <h1>Dice Game</h1>
                <button onClick={showPageHandler}>Play Now</button>
            </div>
        </div>
    )
}
