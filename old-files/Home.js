import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Defaulthome from './components/Defaulthome.js';
import Adduser from './components/Adduser.js';

const Home = (props) => {
  const [ currentpage, setcurrentpage] = useState('Defaulthome');
  const setDefaulthome = () => {
    setcurrentpage('Defaulthome');
  }
  const setAdduser = () => {
    setcurrentpage('Adduser');
  }
  return (
    <div className="homebox">
     {currentpage === 'Defaulthome' && <Defaulthome setAdduser={setAdduser} isdesktop={props.isdesktop}/>}
     {currentpage === 'Adduser' && <Adduser isdesktop={props.isdesktop} setDefaulthome={setDefaulthome}/>}
    </div>
  );
}

export default Home;