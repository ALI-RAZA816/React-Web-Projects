import { useSelector } from 'react-redux'
import style from '../assets/css/ItemsContainer.module.css'
import Item from './Item'

export default function ItemsContainer() {
  
  const Items = useSelector(store => store.items);

  return (
    <main className={style.mainSection}>
      {Items.map(item =>{
        return <Item key={item.id} item ={item}/>
      })}
    </main>
  );
}
