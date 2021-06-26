import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Msginput from '../components/Msginput.js'; 

const Msgbox = ({ username }) => {
  const [messages, setmessages] = useState(null);
  useEffect(() => {
    if (localStorage.getItem(username)) {
      setmessages(JSON.parse(localStorage.getItem(username)));
    } else {
      setmessages(null);
    }
  }, [username]);
  const addmessage = (new_message) => {
    let localmessages;
    if (messages == null) {
      localStorage.setItem(username, JSON.stringify([]));
      localmessages = JSON.parse(localStorage.getItem(username));
    } else {
      localmessages = JSON.parse(localStorage.getItem(username));
    }
    let currenthours = (new Date().getHours() > 12) ? new Date().getHours() - 12 : new Date().getHours();
    let currentampm = (new Date().getHours() < 12) ? ' am' : ' pm';
    let currenttime = currenthours + ':' + new Date().getMinutes() + currentampm;
    localmessages.push({
      body: new_message,
      time: currenttime
    });
    localStorage.setItem(username, JSON.stringify(localmessages));
    setmessages(JSON.parse(localStorage.getItem(username)));
  }
  return (
    <div className="messagebox">
     {messages && messages.map(
     (message, index) => (
      <div key={index} className="msgcontainer">
       <div className="msgcont">
        <div>{message.body}</div>
        <p>{message.time}</p>
       </div>
      </div>
     ))
     }
     <Msginput addmessage={addmessage}/>
    </div>
    );
}
export default Msgbox;