import React from 'react';
import style from '../assets/css/Loader.module.css';

export default function Loader() {
  return (
    <div className={style.loaderContainer}>
        <div className={style.loader}></div>
    </div>
  )
}
