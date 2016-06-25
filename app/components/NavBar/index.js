import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import styles from './styles.css';

function NavBar() {
  return (
    <Navbar className={styles.navbar} inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/#/">InspectR</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/#/">Dashboard</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
