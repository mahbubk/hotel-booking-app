import React, { Component } from "react";
import './Header.css';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

class Header extends Component {
  render() {
    let links = null;
    if (this.props.token === null) {
      links = (
        <Nav className="mr-md-5">
          <NavItem>
            <NavLink
              to="/login"
              className='NavLink'
            >
              Login
            </NavLink>
          </NavItem>
        </Nav>

      )
    } else {
      links = (
        <Nav className="mr-md-5">
          <NavItem>
            <NavLink
              to="/"
              className='NavLink'
            >
              Hotel
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/categoryBtn"
              className="NavLink"
            >
              Reserve Room
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/logout"
              className="NavLink"
            >
              Logout
            </NavLink>
          </NavItem>
        </Nav>

      )
    }
    return (
      <div>
        <div className="Navigation">
          <Navbar style={{
            backgroundColor: "#D70F64",
            height: "70px",
          }}>
            {links}
          </Navbar>

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Header);