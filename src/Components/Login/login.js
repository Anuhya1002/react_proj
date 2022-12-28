import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.onSubmit = this.onSubmit.bind(this);
  }

  emailChange = (value) => this.setState({ email: value });
  passwordChange = (value) => this.setState({ password: value });

  onSubmit() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user != undefined) {
      if (
        this.state.email === user.email &&
        this.state.password === user.password
      ) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            isLoggedIn: true,
          })
        );
        this.useNavigate("/dashboard");
      } else {
        alert("Login Credentials Invalid, Please Try Again");
      }
    }
    console.log(this.state);
  }

  render() {
    return (
      <div className="mainframe">
        <div className="flex-row center-aligned space-between full-height">
          <div className="flex-item flex-column loginblock">
            <div className="flex-row">
              <div className="flex-row banner">
                <img
                  srcSet="https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome.png"
                  className="icon"
                />
                <h2 className="h2">Github</h2>
              </div>
            </div>

            <div className="flex-column g-12 center-aligned full-height">
              <div className="box">
                <h1 className="h2 ">
                  Hey! Welcome Back, Happy To See You Again
                </h1>
                <p className="paragraph">Please login with your credentials</p>
              </div>

              <div className="flex-column gap box">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-field"
                  value={this.state.email}
                  onChange={(e) => this.emailChange(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-field"
                  value={this.state.password}
                  onChange={(e) => this.passwordChange(e.target.value)}
                />
                <div className="flex-row space-between center-aligned">
                  <div className="flex-row space-between center-aligned">
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <p className="paragraph black">Remember me for 10 days</p>
                  </div>
                  <a href="#" className="forgotPassowrd">
                    Forogt Password ?
                  </a>
                </div>
              </div>

              <button onClick={this.onSubmit} className="button">
                Login
              </button>
              <div className="flex-row divider center-aligned">
                <div className="border"></div>
                <p className="paragraph">or</p>
                <div className="border"></div>
              </div>
              <button className="button google-btn">
                <img
                  className="icon"
                  srcSet="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt=""
                  src=""
                />
                Login In With google
              </button>

              <p className="paragraph">
                Dont have an account ?
                <a > Signup for free</a>
              </p>
            </div>
          </div>
          <div className="flex-item grey image full-height">
            <div className="flex-column full-height flexend linear gap">
              <div className="flex-column gap p-50 flexend">
                <h1 className="h1">
                  " We move 10x faster than our peers and stay consistent. While
                  they are bogged down with design debt. we are releasing new
                  features. "
                </h1>
                <div className="border"></div>
                <div className="flex-row center-aligned space-between">
                  <div className="flex-column">
                    <h1 className="h1">Sophie Hall</h1>
                    <p className="p">(Founder, Catalog)</p>
                    <p className="p">Web-design Agency</p>
                  </div>
                  <div className="flex-column gap">
                    <div className="flex-row center-aligned">
                      <img
                        className="icon2"
                        srcSet="https://www.freeiconspng.com/thumbs/white-star-icon/white-star-icon-14.png"
                        alt=""
                        src=""
                      />
                      <img
                        className="icon2"
                        srcSet="https://www.freeiconspng.com/thumbs/white-star-icon/white-star-icon-14.png"
                        alt=""
                        src=""
                      />
                      <img
                        className="icon2"
                        srcSet="https://www.freeiconspng.com/thumbs/white-star-icon/white-star-icon-14.png"
                        alt=""
                        src=""
                      />
                      <img
                        className="icon2"
                        srcSet="https://www.freeiconspng.com/thumbs/white-star-icon/white-star-icon-14.png"
                        alt=""
                        src=""
                      />

                      <img
                        className="icon2"
                        srcSet="https://www.freeiconspng.com/thumbs/white-star-icon/white-star-icon-14.png"
                        alt=""
                        src=""
                      />
                    </div>
                    <div className="flex-row center-aligned gap flexend">
                      <img
                        className="icon3"
                        srcSet="https://dash.com.sg/assets/images/icons/chevron-left--white.svg"
                        alt=""
                        src=""
                      />
                      <img
                        className="icon3"
                        srcSet="https://dash.com.sg/assets/images/icons/chevron-right--white.svg"
                        alt=""
                        src=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
