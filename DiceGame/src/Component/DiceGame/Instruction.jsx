import React, { useContext } from 'react'
import style from '../../assets/css/Instruction.module.css';
import { ImCross } from "react-icons/im";
import ContextProvider from '../ContextStore/ContextProvider';

export default function Instruction() { 

  const { RemoveInstraction } = useContext(ContextProvider);
  
  return (
    <div className={style.instructionContainer}>
        <ImCross onClick={RemoveInstraction} className={style.crossBtn} />
        <div className={style.instructionBox}>
            <h1>How to play dice game</h1>
            <ul>
                <li>Select any number</li>
                <li>Click on dice Image</li>
                <li>After click on dice if selected number is equal to dice number you will get same point as dice if you get wrong guess then 2 points will be deducted</li>
            </ul>
        </div>
    </div>
  )
}
