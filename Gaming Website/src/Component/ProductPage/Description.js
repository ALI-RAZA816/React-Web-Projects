import React from 'react'
import style from '../ProductPage/Description.module.css';
import Paragraph1 from './Paragraph1';

export default function Description({BtnColor, reviewHander, descHander}) {
  return (
    <div>
      <div className="container">
        <div className={style.dscContainer}>
        <div className={style.btn}>
            <button onClick={descHander} className={BtnColor === 'Description' ? style.active : ' '}>Description</button>
            <button onClick={reviewHander} className={BtnColor === 'Review' ? style.active : ' '}>Review (3)</button>
        </div>
        <div className={style.description}>
            {BtnColor === 'Description' && <Paragraph1 text1 = 'You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.' text2 = 'Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.'/>}
            {BtnColor === 'Review' && <Paragraph1 text1='Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen.' text2= 'Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.' />}
        </div>
        </div>
      </div>
    </div>
  )
}
