import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "./pages/SettingsPage";
import Home from "./pages/HomePage";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
/*

/ -> chats
/settings - >settings
/2375298375237 ->  chat
/user/user_id(437658742) ->  user

*/