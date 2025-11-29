import React from 'react'
import { CiSearch ,CiUser ,CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import style from '../assets/css/Header.module.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function Header() {

   const bagItems =  useSelector((store) => store.bagItems);
  return (
    <header className={style.header}>
        <div className={style.logo}>
            <Link to="/"><img src="/assets/images/myntra-logo.png" alt="" /></Link>
        </div>
        <div className={style.menus}>
            <ul>
                <li><a href="/">Men</a></li>
                <li><a href="/">Women</a></li>
                <li><a href="/">Kids</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Beauty</a></li>
                <li><a href="/">Genz</a></li>
                <li><a href="/">Studio</a></li>
            </ul>
        </div>
        <div className={style.search}>
            <CiSearch className={style.searchIcon} />
            <input type="text" placeholder='Search for products, brands and more' />
        </div>
        <div className={style.profile}>
            <div className={style.users}>
                <CiUser className= {style.usersIcon} />
                <span>Profile</span>
            </div>
            <div className={style.wishlist}>
                <CiHeart  className= {style.wishlistIcon} />
                <span>Wishlist</span>
            </div>
            <div className={style.bag}>
                <Link className={style.bagRoute} to="/cart-page"><IoBagOutline  className= {style.bagIcon} />
                <span className={style.counting}>{bagItems.length}</span>
                <span>Bag</span></Link>
            </div>
        </div>
    </header>
  )
}
