import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import './App.css';
import Landing from "./pages/landing"
import Account from "./pages/account"
import Outfit from "./pages/outfit"
import Catalogue from "./pages/catalogue"
import TestAPI from './pages/test';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className = 'landing'>
          <Route exact path="/" component={Landing} />
          </div>
          <Route exact path="/account" component={Account} />
          {/* <Route exact path="/outfit" component={Outfit} /> */}
          <Route exact path="/catalogue" component={Catalogue} />
          <Route exact path="/test" component={TestAPI} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
