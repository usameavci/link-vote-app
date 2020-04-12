import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LinkContextProvider from "./contexts/LinkContext";
import PageIndex from "./components/pages/Index/Index";
import PageSubmit from "./components/pages/Submit/Submit";
import CommonHeader from "./components/common/Header/Header";
import CommonContainer from "./components/common/Container/Container";

import "./app.css";

const App = () => {
  return (
    <div data-testid="app" className="app">
      <Router>
        <LinkContextProvider>
          <CommonHeader />
          <CommonContainer>
            <Switch>
              <Route path="/submit" component={PageSubmit} />
              <Route path="/" component={PageIndex} />
            </Switch>
          </CommonContainer>
        </LinkContextProvider>
      </Router>
    </div>
  );
};

export default App;
