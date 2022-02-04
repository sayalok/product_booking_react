import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";

const Layout = (props) => (
	<div>
		<Header />
			<Container>{props.children}</Container>
		<Footer />
	</div>
);

export default Layout;
