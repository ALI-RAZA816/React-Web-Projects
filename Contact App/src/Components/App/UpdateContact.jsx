import style from '../assets/UpdateContact.module.css';
import { RxCross2 } from "react-icons/rx";

export default function UpdateContact({ errorMsg,removeError,updateContact, name, hideupdateContactBox, email, updatecontacthandler }) {
    return (
        <>
            <div className={`${style.modalContainer} ${updateContact && style.showModal1}`}></div>
            <form className={`${style.ContactModal} ${updateContact && style.showBox1}`} onSubmit={updatecontacthandler} >
                <RxCross2 onClick={hideupdateContactBox} className={style.crossIcon} />
                <div>
                    <label htmlFor="Name">Name</label>
                    <input onFocus={removeError} className={errorMsg && style.redBorder} ref={name} type="text" id='Name' />
                    {errorMsg && <span>Email is required.</span>}
                </div>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input onFocus={removeError} className={errorMsg && style.redBorder} ref={email} type="text" id='Email' />
                    {errorMsg && <span>Email is required.</span>}
                </div>
                <button type='Submit' >Update Contact</button>
            </form>
        </>
    )
}
