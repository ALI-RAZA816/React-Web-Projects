import React from 'react'
import style from './Header.module.css';
import { Link, useLocation } from "react-router-dom";

export default function Header({show, StickyHeader, menuHandler}) {
    const location = useLocation();
    return (
        <div className={`${style.heroBg} ${StickyHeader === true ? `${style.fixedHeader}` : ' '}`}>
            <div className="container">
                <header className={`${style.header} ${StickyHeader === true ? `${style.headerPadd}` : ' '} `}>
                    <div className={style.logo}>
                        <img className={StickyHeader === true ? style.img : ' '} src="/assets/images/logo.png" alt="" />
                    </div>
                    <div className={`${style.menus} ${show === true? style.active : ' '}`}>
                        <ul>
                            <li><Link className ={location.pathname === '/'? `${style.linkActive}` : ''} to="/">Home</Link></li>
                            <li><Link className ={location.pathname === '/shop'? `${style.linkActive}` : ''} to="/shop">Our Shop</Link></li>
                            <li><Link className ={location.pathname === '/product'? `${style.linkActive}` : ''} to="/product">Product Details</Link></li>
                            <li><Link className ={location.pathname === '/contact'? `${style.linkActive}` : ''} to="/contact">Contact Us</Link></li>
                        </ul>
                        <button>Sign In</button>
                    </div>
                    <i onClick={menuHandler} className={`fa-solid ${show === false? 'fa-bars' : 'fa-xmark'}`}></i>
                </header>
            </div>
        </div>
    )
}
