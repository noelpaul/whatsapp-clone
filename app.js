import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';
import Chatbox from './Chatbox.js';
import { Chatopenprovider } from './contexts/Chatopencontext.js';

const Main = () => {
  const [isdesktop, setisdesktop] = useState(null);
  useEffect(() => {
    if (window.innerWidth >= 900) {
      setisdesktop(true);
    }else {
      setisdesktop(false);
    }
  }, []);
  return (
    <Chatopenprovider>
     <div className="mainpage">
      <Home isdesktop={isdesktop}/>
      <Chatbox isdesktop={isdesktop}/>
     </div>
    </Chatopenprovider>
  )
}

ReactDOM.render(
  <Main></Main>,
  document.getElementById('react-app')
);