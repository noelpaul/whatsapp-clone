import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Chatopencontext } from '../contexts/Chatopencontext.js';

const Header = ({ isdesktop, chat, username }) => {
  const appiconsrc = './assets/whatsapp.png';
  const [ closeopen, setcloseopen ] = useContext(Chatopencontext);
  const handleback = () => {
    if (!isdesktop) {
      setcloseopen([ 100, closeopen[1], closeopen[2]]);
    }else {
      return;
    }
  }
  if (chat === true) {
    return (
    <div className="header">
     <button onClick={handleback} className="dpimgcont1">
      {!isdesktop && 
      <img className="img1" src="./assets/back_arrow.png"/>
      }
      <img className="img" src="./assets/app_icon.png"/>
     </button>
     <div className="detailcont">
      <h3>{username}</h3>
      <p>last seen : {closeopen[2]}</p>
     </div>
     <button className="navbtn">
      <img src="./assets/dot_bar.png"/>
     </button>
    </div>
    )
  }else {
    return (
      <div className="header">
       <div className="boxes">
        {isdesktop && 
        <button className="logobtn">
        <img src="./assets/app_icon.png"/>
        </button>
        }
        {!isdesktop && 
        <h3 className="logoheader">My Messenger</h3>
        }
       </div>
       <div className="boxes">
        <button className="navbtn">
         <img src="./assets/search_icon.png"/>
        </button>
        <button className="navbtn">
         <img src="./assets/dot_bar.png"/>
        </button>
       </div>
      </div>
    )
  }
}
export default Header;