import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header.js';
import Chatlist from '../components/Chatlist.js';


const Defaulthome = ({ isdesktop, setAdduser}) => {
  return (
    <div className={isdesktop ? 'deskhomebox': 'homebox'}>
     <Header chat={false} isdesktop={isdesktop}/>
     <Chatlist isdesktop={isdesktop} setAdduser={setAdduser}/>
    </div>
  );
}

export default Defaulthome;