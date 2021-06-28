import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSection } from '../../actions';
import "../../assets/css/components/Header.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
//import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    const sectionActive = useSelector((state) => state.sectionActive);
    const dispatch = useDispatch();

    const handleSetSection = (section) => {
        dispatch(setSection(section));
        console.log(section)
    };


    // const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                ReactGen6
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

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

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>


    )
}


export default Header;