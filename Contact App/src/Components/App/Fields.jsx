import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import style from '../assets/Fields.module.css';

export default function Fields({addContactHandler ,filterContactHandler}) {
  
  return (
    <div className={style.inputField}>
        <div className={style.input}>
            <IoMdSearch className={style.searchIcon} />
            <input type="text" placeholder='Search Contact' onChange={filterContactHandler}/>
        </div>
        <div className={style.addBtn} onClick={addContactHandler}>
            <FaPlus/>
        </div>
    </div>
  )
}
