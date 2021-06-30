export default function Home(params) {
  return (
    <div className="homepage">
        <div className="header">
            <div className="boxes">
                <button className="logobtn">
                  <img src="../assets/app_icon.png"/>
                </button>
                <h3 className="logoheader">Messenger</h3>
            </div>
            <div className="boxes">
                <button className="navbtn">  
                  <img src="../assets/search_icon.png"/>
                </button>
                <button className="navbtn">
                  <img src="../assets/dot_bar.png"/>
                </button>
            </div> 
        </div>
    </div>
  );
}
