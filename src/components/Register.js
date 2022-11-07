/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import loginImage from "../assets/images/login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="login-header">Sign Up</div>
        <div className="content">
          <div className="image">
            <img src={loginImage} alt="register" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="fullname">Full name</label>
              <input type="text" name="fullname" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                name="confirm-password"
                placeholder="confirm password"
              />
            </div>
          </div>
        </div>
        <div className="login-footer">
          <button type="button" className="login-btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
export default Register;
