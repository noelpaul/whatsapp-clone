const Chatbtn = ({ username, discription, time }) => {
    return(
      <a className="chatbtn" href="/chat/username">
        <img src="/assets/user.png"/>
        <div className="chatbtn-details">
          <p>{username}</p>
          <p>{discription}</p>
        </div>
        <div>{time}</div>
      </a>
    );
}
export default Chatbtn;