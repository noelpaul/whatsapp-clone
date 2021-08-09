import { useState } from "react";
import Chatbtn from "../components/Chatbtn";

const ChatPage = () => {
  return(
    <div className="chatpage">
      <div className="chathead">
        <a href="/"><div className="chatppcont">
          <span className="white_arrow"><div></div><div></div></span>
          <img src="/assets/user.png" alt="chatpp" />
        </div></a>
        <div className="chdetail">
          <h4>joel</h4>
          <p>last seen: yesterday</p>
        </div>
        <div>
          <button className="chatnav threedot">
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </div>
      <div className="chatbody">
        <div className="msgcont">
          
        </div>
        <form className="msginput">
          <input type="text" placeholder="Type a message"/>
          <button><img src="/assets/voice_rec.png" alt="" /></button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;