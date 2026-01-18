import React from 'react'
import style from '../ProductPage/Paragraph.module.css';

export default function Paragraph1({text1, text2}) {
  return (
    <div className={style.description}>
      <p>{text1}</p>
      <br />
      <p>{text2}</p>
    </div>
  )
}
