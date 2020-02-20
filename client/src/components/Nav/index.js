import React, { Component } from "react";
import SmallCalendar from "../assets/smallCalendar/index.js";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import "./style.css";

class MainNav extends Component {
  clearTokenFromLS() {
    localStorage.removeItem("token");
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar" expand="lg">
          <Navbar.Brand href="/" className="navBrand">
            Show Up
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="searchSection" className="ml-auto">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="searchBar mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <SmallCalendar />
            </Nav>
            {!this.props.isLoggedIn ? (
              <Nav className="ml-auto">
                <Nav.Link href="/login">Log In</Nav.Link>
              </Nav>
            ) : (
              <Nav className="ml-auto">
                <Nav.Link href="/newevent">Post New Event</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/" onClick={this.clearTokenFromLS}>
                  Logout
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default MainNav;
