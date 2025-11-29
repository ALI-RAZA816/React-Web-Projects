import style from '../assets/ContactModal.module.css';
import { RxCross2 } from "react-icons/rx";


export default function ContactModal({errorMsg,removeError, addContact, hideAddContactBox, name, email, addContactHandler1 }) {

    return (
        <>
            <div className={`${style.modalContainer} ${addContact && style.showModal}`}></div>
            <form onSubmit={addContactHandler1} className={`${style.ContactModal} ${addContact && style.showBox}`}>
                <RxCross2 onClick={hideAddContactBox} className={style.crossIcon} />
                <div>
                    <label htmlFor="Name">Name</label>
                    <input onFocus={removeError} className={errorMsg && style.redBorder} type="text" id='Name' ref={name} />
                    {errorMsg && <span>Name is required.</span>}
                </div>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input onFocus={removeError} className={errorMsg && style.redBorder} type="text" id='Email' ref={email} />
                    {errorMsg && <span>Email is required.</span>}
                </div>
                <button type='Submit'>Add Contact</button>
            </form>
        </>
    );
};
