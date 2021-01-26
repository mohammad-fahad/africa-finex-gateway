import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";


export const UserContext = createContext();
function App() {
  const [country, setCountry] = useState(null);
  const [finalWallet, setFinalWallet] = useState("");
  
  return (
    <UserContext.Provider
      value={{ country, setCountry, finalWallet, setFinalWallet }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <FirstPage />
          </Route>
          <Route path="/firstPage">
            <FirstPage />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
          <Route path="/Page4">
            <Page4 />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
