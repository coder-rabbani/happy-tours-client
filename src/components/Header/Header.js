import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/happy-tours-logo.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" collapseOnSelect expand="lg">
                <Container className="header">
                    <Navbar.Brand as={Link} to="/"><img className="w-50 logo" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="align-middle">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            {user?.email? <>

                            <NavDropdown title="My account" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/my-destination">My destinations
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/manage-destination">Manage all destination
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link}  to="/add-destination">Add a destination
                                </NavDropdown.Item>
                            </NavDropdown>
                            <img width="50" className="rounded-circle" src={user.photoURL} alt="" /><span className="me-2">{user.displayName} </span>
                            <button onClick={logOut} className="happy-btn"> Logout</button>
                            </>
                            :
                            <>
                            <Nav.Link as={NavLink} to="/login" className="happy-btn p-20">Login</Nav.Link></>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
    );
};

export default Header;