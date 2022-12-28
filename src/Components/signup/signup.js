import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
    this.onSubmit = this.onSubmit.bind(this);
  }

  emailChange = (value) => this.setState({email: value});
  passwordChange = (value) => this.setState({password: value});


  onSubmit() {
    console.log(this.state);
      localStorage.setItem('user', JSON.stringify({email: this.state.email, password: this.state.password}));
  }

  render() {
    return (
      <div className="mainframe">
        <div className="flex-row center-aligned space-between full-height">
          <div  className="flex-item flex-column loginblock">
            <div className="flex-row">
              <div  className="flex-row banner">
                <img
                  srcSet="https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome.png"
                  className="icon"
                />
                <h2 className='h2'>Github</h2>
              </div>
            </div>

            <div className="flex-column g-12 center-aligned full-height">
              <div className='box'>
                <h1 className='h2'>
                  Signup Now For Limitless Possibilities
                </h1>
                <p className="paragraph">30 days free trial and cancellation</p>
              </div>

              <div className="flex-column gap box">
                <input type="text" placeholder="Email" className="form-field" value={this.state.email} onChange={(e) => this.emailChange(e.target.value)} />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-field"
                  value={this.state.password} onChange={(e) => this.passwordChange(e.target.value)} 
                />
              </div>

              <button onClick={this.onSubmit} className="button">Signup</button>
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
                Signup With google
              </button>
         

              <p className="paragraph">
                Already have an account ? <a >Login Now</a>
              </p>
            </div>
          </div>
          <div className="flex-item grey image full-height">
            <div
              
              className="flex-column full-height flexend linear gap"
            >
              <div  className="flex-column gap p-50 flexend">
                <h1 className='h1'>
                  " We move 10x faster than our peers and stay consistent. While
                  they are bogged down with design debt. we are releasing new
                  features. "
                </h1>
                <div className="border"></div>
                <div className="flex-row center-aligned space-between">
                  <div className="flex-column">
                    <h1 className='h1'>Sophie Hall</h1>
                    <p className="p">(Founder, Catalog)</p>
                    <p className="p">Web-design Agency</p>
                  </div>
                  <div className='flex-column gap'>
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
                  <div
                  
                  className="flex-row center-aligned gap flexend"
                >
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
