import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={style.footerContainer}>
            <div className="container">
                <div className={style.footer}>
                    <p>Copyright © 2048 LUGX Gaming Company. All rights reserved.    Design: TemplateMo</p>
                </div>
            </div>
        </footer>
    )
}
