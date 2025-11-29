import React, { useContext, useState } from 'react'
import style from '../../assets/css/DicePage.module.css';
import ContextProvider from '../ContextStore/ContextProvider';

export default function DicePage() {

    const buttons = [1, 2, 3, 4, 5, 6];
    const { InstructionHandler } = useContext(ContextProvider);
    const { resetScoreHandler } = useContext(ContextProvider);
    const { errorMsg } = useContext(ContextProvider);
    const { score } = useContext(ContextProvider);
    const { actualImage } = useContext(ContextProvider);
    const { buttonNumberHandler } = useContext(ContextProvider);
    const { BgButton } = useContext(ContextProvider);
    const { changeImageHandler } = useContext(ContextProvider);

    return (
        <div className={style.DicePageContainer}>
            <div className={style.topBox}>
                <div className={style.scoreBox}>
                    <h1>{score}</h1>
                    <p>Total Score</p>
                </div>
                <div className={style.buttonBox}>
                    <p>{errorMsg}</p>
                    <div className={style.btns} style={{ marginLeft: '1rem' }}>
                        {buttons.map(btn => {
                            return <button onClick={() => buttonNumberHandler(btn)} key={btn} className={`${style.targetNumber} ${BgButton === btn && style.active}`}>{btn}</button>
                        })}
                    </div>
                    <p>Select Number</p>
                </div>
            </div>
            <div className={style.diceContainer}>
                <div className={style.diceImage} onClick={changeImageHandler}>
                    <img src={actualImage} alt="" />
                </div>
                <div className={style.rulesBtn}>
                    <p>Click on Dice to roll</p>
                    <button onClick={resetScoreHandler}>Reset Score</button>
                    <button onClick={InstructionHandler}>Show Rules</button>
                </div>
            </div>
        </div>
    )
}
