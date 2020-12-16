import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import './App.css';
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
          <div key={Date.now()} className = 'landing' style={window.location.pathname === '/' ? {height: "100%"} : {}}>
          <Route exact path="/" component={Landing} />
          </div>
          <Route exact path="/account" component={Account} />
          <Route exact path="/outfit" component={Outfit} />
          <Route exact path="/catalogue" component={Catalogue} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
