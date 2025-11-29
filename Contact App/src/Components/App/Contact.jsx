
import style from '../assets/Contact.module.css';
import { FaRegUserCircle, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function Contact({item, deleteHandler, updateContactHandler,Itemindex}) {
  
  return (
    <div className={style.contactItem}>
        <FaRegUserCircle className={style.userIcon} />
        <div style={{width:'100%'}}>
            <span>{item.name}</span>
            <p>{item.email}</p>
        </div>
        <div className="icons" style={{display:'flex'}}>
            <FaEdit className={style.edit} onClick={() => {updateContactHandler(); Itemindex(item)}} />
            <MdDelete className={style.delete} onClick={() => {deleteHandler(item)}} />
        </div>
    </div>
  )
}
