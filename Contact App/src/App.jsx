
import { useRef, useState } from 'react';
import './App.css';
import ContactContainer from './Components/App/ContactContainer';
import ContactModal from './Components/App/ContactModal';
import Fields from './Components/App/Fields';
import Header from './Components/App/Header';
import NoContactFound from './Components/App/NoContactFound';
import UpdateContact from './Components/App/UpdateContact';



export default function App() {
  const DEFAULT_DATA = [
    {name:'ALI RAZA MUJAHID',email:'razadeveloper816@gmail.com'},
    {name:'Ayyaz Muvahib',email:'alirazamujahid102gmail.com'},
    {name:'Haseeb Ahmad',email:'haseebahmad300@gmail.com'},
  ]

  // state handling
  const name = useRef(null);
  const email = useRef(null);
  const updatename = useRef(null);
  const updateemail = useRef(null);
  const [contact, setcontact] = useState(DEFAULT_DATA);
  const [errorMsg, seterrorMsg] = useState(false);
  const [finalIndex, setFinalIndex] = useState(null);
  const [addContact, setaddContact] = useState(false);
  const addContactBoxHandler = () => setaddContact(true);
  const [updateContact, setupdateContact] = useState(false);
  const updateContactBoxHandler = () => setupdateContact(true);
  
  // for add name || gmail
  const addContactHandler = (event) => {
    event.preventDefault();
    if (!name.current.value || name.current.value === null) {
      return seterrorMsg(true);
    }
    if (!email.current.value || email.current.value === null) {
      return seterrorMsg(true);
    }

    setcontact(
      [...contact, {
        name: name.current.value,
        email: email.current.value,
      }
      ]);
    setaddContact(false);
    name.current.value = ' ';
    email.current.value = ' ';
  }

  // targeting index
  const Itemindex = (index) => {
    const findIndex = contact.indexOf(index);
    setFinalIndex(findIndex);
  }

  // update name || gmail targeting contact
  const updatecontacthandler = (event) => {
    event.preventDefault();
     if (!updatename.current.value || updatename.current.value === null) {
      return seterrorMsg(true);
    }
    if (!updateemail.current.value || updateemail.current.value === null) {
      return seterrorMsg(true);
    }
    contact[finalIndex].name = updatename.current.value;
    contact[finalIndex].email = updateemail.current.value;
    updatename.current.value = ' ';
    updateemail.current.value = ' ';
    setupdateContact(false);
  }
  
  // delete contact
  const deleteHandler = (index) => {
    const NewContacts = contact.filter(item => item !== index);
    setcontact(NewContacts);
  }

  // filter contact on input value
  const filterContactHandler = (event) => {
    console.log(event.target.value);
    const filterContact = contact.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setcontact(filterContact);
  }

  const hideAddContactBox = () => {
    setaddContact(false);
    seterrorMsg(false);
  };
  const hideupdateContactBox = () => {
    setupdateContact(false);
    seterrorMsg(false);
  };
  const removeError = () => seterrorMsg(false);
  
  return (
    <div className='appContainer'>
      <div className="wrapper" style={{ position: 'relative' ,padding:'.5rem 0'}}>
          <Header />
          <Fields filterContactHandler={filterContactHandler} addContactHandler={addContactBoxHandler} />
          {contact.length === 0 ? <NoContactFound /> :
          <ContactContainer deleteHandler={deleteHandler} Itemindex={Itemindex} updateContactHandler={updateContactBoxHandler} contact={contact} />}
          <ContactModal removeError= {removeError} errorMsg = {errorMsg} hideAddContactBox = {hideAddContactBox} addContact={addContact} name={name} email={email} addContactHandler1={addContactHandler} />
          <UpdateContact removeError= {removeError} errorMsg = {errorMsg} hideupdateContactBox = {hideupdateContactBox} updatecontacthandler={updatecontacthandler} updateContact={updateContact} name={updatename} email={updateemail} />
      </div>
    </div>
  );
}
