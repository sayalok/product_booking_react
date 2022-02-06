import React from "react";
import {Container,Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">Test Project</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/">Home</Nav.Link>
							<Nav.Link as={Link} to="/booking_list">Booking List</Nav.Link>
							<Nav.Link as={Link} to="/return_list">Return List</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
