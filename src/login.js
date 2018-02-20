import React from "react";
import { Redirect } from "react-router-dom";
import "../public/login.css";

function LoginButton(props) {
  return (
    <div>
      <button className="loginButton" onClick={props.openLoginForm}>
        Login/Register
      </button>
    </div>
  );
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername(event) {
    const username = event.target.value;
    this.setState({
      username: username
    });
  }

  handlePassword(event) {
    const password = event.target.value;
    this.setState({
      password: password
    });
  }

  handleSubmit() {
    window
      .fetch("/login", {
        method: "POST",
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then(response => {
        return response.json().then(data => {
          if (response.ok) {
            return data;
          } else {
            return Promise.reject({ status: response.status, data });
          }
        });
      })
      .then(result => {
        if (result && result.success === "yes") {
          <Redirect push to="/loggedin" />;
          console.log("success");
        } else {
          console.log("failure");
        }
      })
      .catch(error => console.log("error:", error));
    event.preventDefault();
    event.stopPropagation();
  }

  render() {
    return (
      <div
        className={this.props.visible ? "loginBox visible" : "loginBox hidden"}
      >
        <h2>Login</h2>
        <form>
          <input
            className="formFields"
            type="text"
            onChange={this.handleUsername}
            value={this.state.username}
            placeholder="User Name"
          />
          <br />
          <input
            className="formFields"
            type="password"
            onChange={this.handlePassword}
            value={this.state.password}
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Login" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export class LoginApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginFormVisible: false
    };

    this.openLoginForm = this.openLoginForm.bind(this);
    this.closeLoginForm = this.closeLoginForm.bind(this);
  }

  openLoginForm() {
    this.setState({
      loginFormVisible: true
    });
  }

  closeLoginForm() {
    this.setState({
      loginFormVisible: false
    });
  }

  render() {
    return (
      <div className="loginApp">
        <LoginButton openLoginForm={this.openLoginForm} />
        <div
          className={
            this.state.loginFormVisible
              ? "loginBoxContainer visible"
              : "loginBoxContainer"
          }
          onClick={this.closeLoginForm}
        >
          <LoginForm visible={this.state.loginFormVisible} />
        </div>
      </div>
    );
  }
}
