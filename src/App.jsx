import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "./pages/SettingsPage";
import Home from "./pages/HomePage";
import Chat from "./pages/ChatPage";
import ChatSettings from "./pages/settings/ChatSettings";
import AddChat from "./pages/Addpage";
import DataContextProvider from "./contexts/DataContext";


const App = () => {
  return (
    <DataContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/newchat" component={AddChat} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/chat/:username" component={Chat} />
            <Route exact path="/settings/chat/" component={ChatSettings} />
          </Switch>
        </Router>
      </div>
    </DataContextProvider>
  );
}

export default App;