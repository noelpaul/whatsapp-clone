import Settingsbtn from "../components/Settingsbtn";
import MainHeader from "../components/MainHeader";


export default function Settings() {
    return(
        <div className="settings">
            <MainHeader back="/" page="Settings"/>
            <a href="/" className="prof_part">
                 <img id="dp" src="/assets/user.png"/>
                <div>
                    <p>Ronaldo</p>
                    <span>hey there i'm using whats...</span>
                </div>
                <img id="qr_code" src="/assets/qr_code.png" />
                <hr />
            </a>

            <Settingsbtn type="link" link="/" image="/assets/key.png" name="Account" description="Privacy, security, change number" />
            <Settingsbtn type="link" link="/settings/chat-settings" image="/assets/chat.png" name="Chats" description="Theme, walpapers, chat history" />
            <Settingsbtn type="link" link="/" image="/assets/notification.jpg" name="Notifications" description="Mesage, group and call tones" />
            <Settingsbtn type="link" link="/" image="/assets/data.jpg" name="Storage and data" description="Network usage, auto-download" />
            <Settingsbtn type="link" link="/" image="/assets/help.jpg" name="Help" description="Help centre, contact us, privacy policy" />
            <Settingsbtn type="link" link="/" image="/assets/members.jpg" name="Invite a friend" />
            
            
            <div className="dev">
                <p>from</p>
                <span>FACEBOOK</span>
            </div>
        </div>
    );
}