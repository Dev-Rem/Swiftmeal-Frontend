/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import loginImage from "../assets/images/login.svg";
import { Container } from "react-bootstrap";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Container fluid>
          <div className="base-container" ref={this.props.containerRef}>
            <div className="login-header">Login</div>
            <div className="content">
              <div className="image">
                <img src={loginImage} alt="login" />
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" placeholder="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                </div>
              </div>
            </div>
            <div className="login-footer">
              <button type="button" className="login-btn">
                Login
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
