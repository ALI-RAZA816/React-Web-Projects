
import { FaUserCircle } from "react-icons/fa";
import style from '../assets/NoContactFound.module.css';
export default function NoContactFound() {
    return (
        <div className={style.nocontact}>
            <div className={style.contactText}>
                <FaUserCircle className={style.userIcon} />
                <h1>No Contact Found</h1>
            </div>
        </div>
    )
}
