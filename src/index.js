import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { LoginApp } from "./login";

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/loggedin">
          <h1>You have been logged in!</h1>
        </Route>
        <Route path="">
          <LoginApp />
        </Route>
      </Switch>
    </Router>
  </div>
);

render(<App />, document.getElementById("root"));
