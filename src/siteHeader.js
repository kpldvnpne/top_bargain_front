import React from "react";
import { Link } from "react-router-dom";
import { LoginApp } from "./login";

import "../css/siteHeader.css";

export class SiteHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };

    this.setLoginActivity = this.setLoginActivity.bind(this);
  }

  setLoginActivity(loggedIn) {
    this.setState({
      isLoggedIn: loggedIn
    });
  }

  render() {
    const path = window.location.pathname;
    const searchClassName = "navItems" + (path === "/search" ? " active" : "");
    const postClassName = "navItems" + (path === "/post" ? " active" : "");
    return (
      <div className="siteHeader">
        <div className="siteLogoContainer">
          <Link to="/">
            <img
              id="siteLogo"
              src="https://i.imgur.com/q3CYgv4.png"
              alt="Top Bargain Logo"
            />
          </Link>
        </div>

        <Link to="/search">
          <div className={searchClassName}>Search</div>
        </Link>

        <Link to="/post">
          <div className={postClassName}>Post </div>
        </Link>

        <LoginApp setLoggedIn={() => this.setLoginActivity(true)} />
      </div>
    );
  }

  /*render() {
    return (
      <header id="header">
        <div class="container">
          <div class="pull-left">
            <Link to="/">
              <img
                id="siteLogo"
                src="https://i.imgur.com/q3CYgv4.png"
                alt="Top Bargain Logo"
              />
            </Link>
          </div>
        </div>
      </header>
    );
  }*/
}
