import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";

import './layout.css'

const Layout = (props) => (
	<div>
		<Header />
			<section id="layout_wrapper">
				<Container>{props.children}</Container>
			</section>
		<Footer />
	</div>
);

export default Layout;
