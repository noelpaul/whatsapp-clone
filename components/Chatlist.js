import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Chatopencontext } from '../contexts/Chatopencontext.js';

function Chatbtn(props) {
  const [ closeopen, setcloseopen ] = useContext(Chatopencontext);
  const handleclick = () => {
    setcloseopen([ 0, props.username, props.last_seen]);
  }
  return (
    <div onClick={handleclick} className="chatbtn">
     <div className="dpimgcont">
      <img src={props.dpsrc}/>
     </div>
     <div className="detailcont">
      <h3>{props.username}</h3>
      <p>you : {props.id}</p>
     </div>
    </div>
  )
}
function Chatlist({ setAdduser, isdesktop }) {
  const [ contacts, setcontacts ] = useState(null);
  useEffect(() => {
    setcontacts(JSON.parse(localStorage.getItem('contacts')));
  }, []);
  return (
    <div className="chatlist">
     {contacts && contacts.map((contact,index) => (
       <Chatbtn key={index} dpsrc="./assets/app_icon.png" username={contact.username} id="hello" last_seen={contact.last_seen}/>
       )
      )
     }
     {!isdesktop && 
     <button onClick={setAdduser} className="newchatbtn">
      <img src="./assets/add_user.png"/>
     </button>}
     {isdesktop && 
     <button onClick={setAdduser} className="newchatbtn" style={{right: '62%'}}>
      <img src="./assets/add_user.png"/>
     </button>}
    </div>
  )
}
export default Chatlist;