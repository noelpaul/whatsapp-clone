import MainHeader from "../../components/MainHeader";
import Settingsbtn from "../../components/Settingsbtn";

export default function ChatSettings() {
    return (
        <div className="chatSettings">
            <MainHeader back="/settings" page="Chats" />

            <div className="display">
                <h5>Display</h5>
                <Settingsbtn type="popup" image="/assets/theme.png" name="Theme" description="LightS" />
                <Settingsbtn type="link" image="/assets/wallpaper.png" name="Walpaper" />
                <i className="fa fa-sun"></i>
            </div>

        </div>
    );
} 

/*

<div className="chat">
            <div className="chat_header">
                <a href="/settings" className="white_arrow"><div></div><div></div></a>
                <p>Chats</p>
            </div>
        </div>

.display_options
Theme                  light       /assets/theme.png
Walpaper               /assets/wallpaper.png

.chat_settings
Enter is send          Enter key will send your message
Media visibility       Show newly downloaded media in your phone's gallery
Font size              Small
App language           Phone's language(English)
Chat backup
Chat history
<Settingsbtn type="input" image="" name="Enter is send " description="Enter key will send your message" />
<Settingsbtn type="input" image="" name="Media visibility" description="Show newly downloaded media in your phone's gallery" />

*/