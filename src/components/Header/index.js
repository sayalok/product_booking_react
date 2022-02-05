import React from "react";
import {Container,Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">Test Project</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Link
							to="/"
							className='me-auto'
						>
							Home
						</Link>
						<Link
							to="/booking_list"
							className='me-auto'
						>
							Booking List
						</Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
