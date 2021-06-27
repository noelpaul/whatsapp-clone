import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Msgbox from './components/Msgbox.js';
import { Chatopencontext } from '../contexts/Chatopencontext.js';

const Chatbox = ({ isdesktop }) => {
  const [ closeopen, setcloseopen ] = useContext(Chatopencontext);
  useEffect(() => {
    if (isdesktop) {
      setcloseopen([ 0, closeopen[1], closeopen[2]]);
      console.log(0);
    }else {
      setcloseopen([ 100, closeopen[1], closeopen[2]]);
    }
  }, [isdesktop]);
  
  return (
    <div className={isdesktop ? 'deskchatbox': 'chatbox'} style={{transform: `translateX(${closeopen[0]}%)`}}>
    {closeopen[1] &&
     <Header chat={true} username={closeopen[1]} isdesktop={isdesktop}/>
    }
    {closeopen[1] &&
    <Msgbox username={closeopen[1]}/>
    }
    {!closeopen[1] &&
     <h2 style={{margin: 'auto auto'}}>Goodmorning</h2>
    }
    </div>
  );
}

export default Chatbox;