import React, { Component } from "react";
import "./App.css";
import { Dashboard } from "./Components/dashboard/dashboard";
import { Login } from "./Components/Login/login";
import { Signup } from "./Components/signup/signup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: this.getUser() };
  }
  getUser() {
    console.log(this.state);
    let gotUser = JSON.parse(localStorage.getItem("user"));
    return gotUser
  }
  render() {
    if(this.state.user !== undefined) {
      if (this.state.user.isLoggedIn == true) {
        return (<Dashboard />);
      } else {
        return (<Login />);
      }
    } else {
      return (<Login />);
    }

  }
}

export default App;
