import React from 'react';
import style from '../ShopPage/PageNumber.module.css'

export default function PageNumber() {
    return (
        <div>
            <div className="container">
                <div className={style.pageBtn}>
                    <div className={style.backBtn}>
                        <i className='fa-solid fa-angle-left'></i>
                    </div>
                    <div className={style.pageNumber}>
                        <div className=" page page1">1</div>
                        <div className=" page page2 active">2</div>
                        <div className=" page page3">3</div>
                        <div className=" page page4">4</div>
                        <div className=" page page5">5</div>
                    </div>
                    <div className={style.forwardBtn}>
                        <i className='fa-solid fa-angle-right'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
