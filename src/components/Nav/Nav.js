import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nav.scss";

const MyNavBar = ({ onLogout }) => {
    return (
        <div className="navbar ">
            <div className="nav-header container">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Navbar.Brand href="/">
                        <h3 className="brand">
                            <img
                                src="/img/logo.png"
                                width="50px"
                                height="50px"
                                className="d-inline-block align-top mx-3"
                                alt="Logo"
                            />
                        </h3>
                    </Navbar.Brand>

                    <Container>
                        <Navbar.Collapse id="nav-role">
                            <Nav className="me-auto">
                                <NavLink to="/users" className="nav-link">
                                    User
                                </NavLink>
                                <NavLink to="/cars" className="nav-link">
                                    Cars
                                </NavLink>
                                <NavLink to="/tickets" className="nav-link">
                                    Tickets
                                </NavLink>
                            </Nav>
                            <Nav className="login-User">
                                <Nav.Item className="nav-link welcome">
                                    User !
                                </Nav.Item>
                                <NavDropdown title="Settings" id="basic-nav-dropdown">
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={onLogout}>
                                        <span>Log out</span>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default MyNavBar;
