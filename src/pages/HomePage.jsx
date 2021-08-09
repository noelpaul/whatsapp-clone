import { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import Chatbtn from "../components/Chatbtn";
import { DataContext } from "../contexts/DataContext";


export default function Home(params) {
  const { data } = useContext(DataContext);
  const [ navbar, setnav ] = useState(false);
  const [ term, setterm ] = useState('');
  const [ searching, setsearching ] = useState(false);
  let lastmsg;
  const opennav = () => {
    setnav(!navbar);
  }
  const closenav = (e) => {
    if (e.target.id !== 'nav') setnav(false);
  }
  const opensearch = () => {
    setsearching(true);
  }
  const closesearch = () => {
    setsearching(false);
  }
  const handlesearch = (e) => {
    setterm(e.target.value);
    console.log(term);
  }
  const clearterm = () => {
    setterm('');
  }
  useEffect(() => {
    document.onclick = e => closenav(e);
  }, [])
  return (
    <div className="homepage">
      {!searching &&
      <div className="header">
        <div className="header-a">
          <h3>WhatsApp</h3>
          <i className="fa fa-search" onClick={opensearch}></i>
          <i className="fa fa-ellipsis-v" onClick={opennav} id="nav"></i>
        </div>
        <div className="header-b">
          <i className="fa fa-camera"></i>
          <span>CHATS</span>
          <span>STATUS</span>
          <span>CALLS</span>
        </div>
      </div>
      }
      {searching &&
      <div className="search">
        <i className="fa fa-arrow-left" onClick={closesearch}></i>
        <input autoFocus={true} type="text" placeholder="Search..." value={term} onChange={handlesearch}/>
        {term != '' && 
        <i class="fa fa-times" onClick={clearterm}></i>
        }
      </div>
      }
      <div className="chatlist">
        {
          data[0].chats.map((chat, index) => {
            lastmsg = chat.messages[chat.messages.length - 1];
            return(
              <Chatbtn username={chat.username} discription={lastmsg.body} time={lastmsg.time} key={index}/>
            );
          })
        }
      </div>
      <Link to="/newchat" className="roundbtn"><i className="fa fa-message"></i></Link>
      {navbar &&
        <div className="nav">
          <nav id="nav">
            <a href="">Add contact</a>
            <a href="/settings">settings</a>
            <a href="">blah blah</a>
            <a href="">Starred messages</a>
            <a href="">blah blah</a>
          </nav>
        </div>
        }
    </div>
  );
}
