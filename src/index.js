import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { SiteHeader } from "./siteHeader";
import { SearchApp } from "./search";
import { HomePage } from "./homepage";
import { PostForm } from "./post";

import "../css/index.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => (
  <div>
    <Router>
      <div>
        <SiteHeader />
        <Route path="/search" component={SearchApp} />
        <Route path="/post" component={PostForm} />
        <Route exact path="/" component={HomePage} />
      </div>
    </Router>
  </div>
);

render(<App />, document.getElementById("root"));
