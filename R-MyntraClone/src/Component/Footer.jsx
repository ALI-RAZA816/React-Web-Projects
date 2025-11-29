import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import style from '../assets/css/Footer.module.css';

export default function Footer() {
    return (
        <footer className={style.footerContainer}>
            <div className={style.footerMain}>
                <div className={`${style.box} ${style.box1}`}>
                    <h6>Online Shopping</h6>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Home</li>
                        <li>Beauty</li>
                        <li>Genz</li>
                        <li>Gifts Cards</li>
                        <li>Myntra Insider</li>
                    </ul>
                </div>
                <div className={`${style.box} ${style.box2}`}>
                    <h6>Customer Policies</h6>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>T&C</li>
                        <li>Terms of Use</li>
                        <li>Track Orders</li>
                        <li>Shipping</li>
                        <li>Cancellation</li>
                        <li>Returns</li>
                        <li>Privacy Policy</li>
                        <li>Grievance Redressal</li>
                        <li>FSSAI Food Safety</li>
                        <li>Connect App</li>
                    </ul>
                </div>
                <div className={`${style.box} ${style.box3}`}>
                    <h6>Experience Myntra App on Mobile</h6>
                    <div className={style.images}>
                        <img src="/assets/images/googlePayBtn.png" alt="" />
                        <img src="/assets/images/appstorebutton.png" alt="" />
                    </div>
                    <div className={style.keepintouch}>
                        <span>Keep in touch</span>
                        <div className={style.icons}>
                            <FaSquareFacebook style={{marginRight:'.5rem'}} />
                            <FaTwitter style={{marginRight:'.5rem'}} />
                            <FaYoutube style={{marginRight:'.5rem'}} />
                            <FaInstagramSquare style={{marginRight:'.5rem'}} />
                        </div>
                    </div>
                </div>
                <div className={`${style.box} ${style.box4}`}>
                    <div>
                        <img src="/assets/images/stamp.png" alt="" />
                        <div>
                            <p><span>100% ORIGINAL</span> guarantee for all products at myntra.com</p>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/images/Return-Window-image.png" alt="" />
                        <div>
                            <p><span>Return within 14days</span> of receiving your orders</p>
                        </div>
                    </div>
                </div>
                <div className={`${style.box} ${style.box5}`}>
                    <h6>Useful Links</h6>
                    <ul>
                        <li>Blogs</li>
                        <li>Careers</li>
                        <li>Site Map</li>
                        <li>Corporate Information</li>
                        <li>Whitehat</li>
                        <li>Cleartrip</li>
                        <li>Myntra Global</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
