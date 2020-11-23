import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <>
        <div>
        <Navbar variant="dark" expand="xl" fixed="top" className="navbar">
          <Navbar.Brand href="/outfit">
            <Navbar.Text className="navbarTitle">Atelier</Navbar.Text>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
                <Nav.Link href="/outfit" className="navbarLink">Outfit</Nav.Link>
                <Nav.Link href="/catalogue" className="navbarLink">Catalogue</Nav.Link>
                <Nav.Link href="/account" className="navbarLink">Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      </>
    )
  }
}
