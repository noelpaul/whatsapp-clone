import React, { useState } from 'react';
import ReactDom from 'react-dom';

const Msginput = ({ addmessage }) => {
  const [ message, setmessage ] = useState('');
  const [ ismessage, setismessage ] = useState(false);
  const handlesend = (e) => {
    e.preventDefault();
    setismessage('');
    addmessage(message);
    setmessage('');
  }
  const handlemessage = (e) => {
    setmessage(e.target.value);
    const pattern = /^\s*$/g;
    if (pattern.test(e.target.value)) {
      setismessage(false);
    }else {
      setismessage(true);
    }
  }
  return(
    <form onSubmit={handlesend} className="sendmsg">
     <input onChange={handlemessage} onInput={handlemessage} placeholder="Type a message" type="text" value={message}/>
     <input style={{
     opacity: (ismessage) ? 1: 0,
     'pointerEvents': (ismessage) ? 'auto': 'none'
     }} type="submit" className="sendmsgbtn" value="send"/>
    </form>
  );
}
export default Msginput;