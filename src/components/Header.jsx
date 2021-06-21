import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSection } from '../actions';
import "../assets/css/components/Header.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const sectionActive = useSelector((state) => state.sectionActive);
  const dispatch = useDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(section));
    console.log(section)
  };


// const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">App-Gen6</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ml-3">

            <Link onClick={() => handleSetSection("Characters")}
                className={`header__nav__options-item ${sectionActive === "Characters" ? "active" : ""
                }`} to="/">Personajes
            </Link>
            <Link onClick={() => handleSetSection("GifsExpert")}
                className={`header__nav__options-item ${sectionActive === "GifsExpert" ? "active" : ""
                }`} to="/Gifs">GifsExpert
            </Link>

        </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}


export default Header;