import React from 'react';

const AddChat = () => {
    return(
      <div className="addchatpage">
        <div className="header">
          <a href="/" className="white_arrow"><div></div><div></div></a>
          <div className="chdetail">
            <h4>All Contacts</h4>
            <span>2 contacts</span>
          </div>
          <div className="boxes right">
          <button className="navbtn" >
            <div></div>
            <div></div>
          </button>
          <button className=" navbtn threedot">
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div> 
        </div>
        <div className="chatbtn">
          <div className="ppimg">
            <img src="/assets/user.png"/>
          </div>
          <h3>New group</h3>
        </div>
      </div>
    );
}

export default AddChat;