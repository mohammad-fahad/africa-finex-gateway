import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FinalPage from "./components/FinalPage";
import FirstPage from "./components/FirstPage";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Sell from "./components/Sell";
import Sell2 from "./components/Sell2";
import Sell3 from "./components/Sell3";
import Sell4 from "./components/Sell4";


export const UserContext = createContext();
function App() {
  const [country, setCountry] = useState(null);
  const [finalWallet, setFinalWallet] = useState("");
  const [finalWalletSell, setFinalWalletSell] = useState("");
  
  return (
    <UserContext.Provider
      value={{
        country,
        setCountry,
        finalWallet,
        setFinalWallet,
        finalWalletSell,
        setFinalWalletSell,
      }}
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
          <Route path="/sell">
            <Sell />
          </Route>
          <Route path="/sell2">
            <Sell2 />
          </Route>
          <Route path="/sell3">
            <Sell3 />
          </Route>
          <Route path="/sell4">
            <Sell4 />
          </Route>
          <Route path="/finalPage">
            <FinalPage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
