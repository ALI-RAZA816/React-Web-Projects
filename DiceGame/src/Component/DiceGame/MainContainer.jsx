import React, { useState } from 'react'
import style from '../../assets/css/MainContainer.module.css';
import WelcomeScreen from './WelcomeScreen';
import DicePage from './DicePage';
import Instruction from './Instruction';
import ContextProvider from '../ContextStore/ContextProvider';


export default function MainContainer() {

    const [BgButton, setBgButton] = useState();
    const [showWelcomePage, setWelcomePage] = useState(false);
    const [showInstruction, setInstruction] = useState(false);
    const [errorMsg, seterrorMsg] = useState('')
    const [score, setScore] = useState(0);
    const [actualImage, setactualImage] = useState('/images/dice/dice_1.png');

    const diceImages = [
        { image: '/images/dice/dice_1.png', score: 1 },
        { image: '/images/dice/dice_2.png', score: 2 },
        { image: '/images/dice/dice_3.png', score: 3 },
        { image: '/images/dice/dice_4.png', score: 4 },
        { image: '/images/dice/dice_5.png', score: 5 },
        { image: '/images/dice/dice_6.png', score: 6 },
    ]

    const changeImageHandler = () => {
        const Index = Math.floor(Math.random() * diceImages.length);
        const image = diceImages[Index].image;
        const diceScore = diceImages[Index].score;
        setactualImage(image);
        seterrorMsg(' ')

        if (!BgButton) {
            seterrorMsg('You have not selected any number');
            return;
        }

        if (BgButton === diceScore) {
            setBgButton();
            setScore(score + diceScore);
        } else {
            setBgButton();
            setScore(score - 2);
        }
    }

    const showPageHandler = () => {
        setWelcomePage(true);
    }

    const showInstructionHandler = () => {
        setInstruction(!showInstruction);
    }

    const removeInstructionHandler = () => {
        setInstruction(!showInstruction);
    }

    const buttonNumberHandler = (number) => {
        setBgButton(number);
    }

    const resetScoreHandler = () => {
        setScore(0);
    }

    return (
        <div className={style.MainContainer}>
            <ContextProvider.Provider value={{
                showPageHandler,
                buttonNumberHandler,
                resetScoreHandler,
                errorMsg,
                actualImage,
                BgButton,
                score,
                changeImageHandler,
                InstructionHandler : showInstructionHandler,
                RemoveInstraction : removeInstructionHandler
            }}>
                {showWelcomePage === false ? <WelcomeScreen/> : <DicePage/>}
                {showInstruction && <Instruction/>}
            </ContextProvider.Provider>
        </div>
    )
}
