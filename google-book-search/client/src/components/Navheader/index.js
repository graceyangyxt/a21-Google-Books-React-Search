import React from "react";
import {Navbar, Nav } from 'react-bootstrap';
import "./style.css";

function Navheader(){
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Google Books</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/saved">Saved</Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default Navheader;