import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../container/Home"
import Manager from "../container/Manager";

const App = () => {
  return (
    <Router history={history}>
        <Switch>
          <Route path="/manager" exact>
            <Manager />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
};

export default App;
