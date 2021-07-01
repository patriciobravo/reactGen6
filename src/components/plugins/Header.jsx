import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSection } from '../../actions';
import "../../assets/css/components/Header.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, } from 'react-bootstrap';

const Header = () => {
    const sectionActive = useSelector((state) => state.sectionActive);
    const dispatch = useDispatch();

    const handleSetSection = (section) => {
        dispatch(setSection(section));
    };

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand to="/">ReactGen6</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link onClick={() => handleSetSection("Marvel")}

                        className={`header__nav__options-item ${sectionActive === "Marvel" ? "active" : "desactive"
                            }`} to="/">Personajes
                    </Link>
                    <Link onClick={() => handleSetSection("Favorites")}

                        className={`header__nav__options-item ${sectionActive === "Favorites" ? "active" : "desactive"
                            }`} to="/Favorites">Favoritos
                    </Link>

                    <Link onClick={() => handleSetSection("GifsExpert")}

                        className={`header__nav__options-item ${sectionActive === "GifsExpert" ? "active" : "desactive"
                            }`} to="/GifsExpert">GifsExpert
                    </Link>

                </Nav>
                <Nav>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}


export default Header;