import style from '../assets/ContactContainer.module.css';
import Contact from './Contact';
export default function ContactContainer({updateContactHandler, deleteHandler ,Itemindex, updateHandler, contact}) {
  
  return (
    <div className={style.contactContainer}>
      {contact.map(item =>{
        return <Contact key={item.name} deleteHandler = {deleteHandler} Itemindex = {Itemindex} updateContactHandler = {updateContactHandler} item = {item} updateHandler = {updateHandler} />
      })}
    </div>
  )
}
