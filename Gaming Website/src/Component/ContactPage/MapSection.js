import React from 'react';
import style from '../ContactPage/MapSection.module.css'

export default function MapSection() {
    return (
        <div>
            <div className="container">
                <div className={style.mapForm}>
                    <div className={style.left}>
                        <span>Contact us</span>
                        <h1>Say Hello!</h1>
                        <p>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
                        <div className={style.addressDetail}>
                            <div className="address">
                                <span>Address</span>
                                <span>Sunny Isles Beach, FL 33160, United States</span>
                            </div>
                            <div className="phone">
                                <span>Phone</span>
                                <span>+123 456 7890</span>
                            </div>
                            <div className="email">
                                <span>Email</span>
                                <span>example@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.right}>
                        <div className={style.map}>
                            <iframe title='map' src="https://www.google.com/maps/@30.632591,73.6167772,50784m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MTExMS4wIKXMDSoASAFQAw%3D%3D" frameborder="0"></iframe>
                        </div>
                        <div className={style.form}>
                            <form action="">
                                <div className="name">
                                    <input type="text" placeholder='Your Name..' />
                                    <input type="text" placeholder='Your Surname..' />
                                </div>
                                <div className="email">
                                    <input type="text" placeholder='Your E-mail' />
                                    <input type="text" placeholder='Subject' />
                                </div>
                                <div className="message">
                                    <textarea name="" id="" rows={4} placeholder='Your Message'></textarea>
                                </div>
                                <button type='Submit'>Send Message Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
