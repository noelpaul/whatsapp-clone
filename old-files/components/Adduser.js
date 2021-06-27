import React, { useState } from 'react';
import ReactDom from 'react-dom';

const Adduser = ({ setDefaulthome, isdesktop }) => {
  const [username, setusername] = useState('');
  const handleinput = (e) => {
    e.preventDefault();
    const pattern = /^\s*$/g;
    if ( pattern.test(username) ) {
      alert('Enter a valid username');
    }else {
      let contacts = [];
      if (localStorage.getItem('contacts') === null) {
        localStorage.setItem("contacts", JSON.stringify(contacts));
      } else {
        contacts = JSON.parse(localStorage.getItem('contacts'));
      }
      const checkcontacts = (contact) => {
        return contact['username'] == username.trim();
      }
      if (contacts.find(checkcontacts) !== undefined) {
        alert('Username already exists');
      }else {
        contacts.push({
          'username': username.trim(),
          last_seen: 'not available'
        });
        localStorage.setItem('contacts', JSON.stringify(contacts));
        setusername('');
      }
    }
    setDefaulthome();
  }
  const handlechange = (e) => {
    setusername(e.target.value);
  }
  return (
    <form onSubmit={handleinput} className={isdesktop ? 'deskaddform': 'addform'}>
     <h2>Add new chat</h2>
     <fieldset>
      <legend>Username</legend>
      <input onChange={handlechange} name="username" type="text" placeholder="Enter Username name" value={username}/>
     </fieldset>
     <input type="submit" value="submit"/>
     <div onClick={setDefaulthome}>
      <img className="img1" src="./assets/back_arrow.png"/>
     </div>
    </form>
  )
}
export default Adduser;