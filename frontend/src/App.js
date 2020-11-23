import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import './App.css';
import CreateAccount from "./pages/createAccount"
import Login from "./pages/login"
import Landing from "./pages/landing"
import Account from "./pages/account"
import Outfit from "./pages/outfit"
import Catalogue from "./pages/catalogue"
import cookie from "react-cookies"

function App() {
  cookie.save(
    'login',
    true,
    {
      path: '/',
    }
  )
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createAccount" component={CreateAccount} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/outfit" component={Outfit} />
          <Route exact path="/catalogue" component={Catalogue} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
