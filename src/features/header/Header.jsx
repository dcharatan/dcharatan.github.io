import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import HeaderLink from './HeaderLink';

const Header = () => (
  <Navbar
    bg="white"
    expand="lg"
    className="border-bottom p-0 align-items-stretch"
  >
    <div className="border-right px-4 py-3">David Charatan</div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
    <Navbar.Collapse>
      <Nav className="p-2">
        <HeaderLink>Research</HeaderLink>
        <HeaderLink>Projects</HeaderLink>
        <HeaderLink>Resume</HeaderLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
