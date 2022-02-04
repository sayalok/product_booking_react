import React from "react";
import Loader from "./components/Loader";

//Components
import Layout from "./components/Layout";

const App = (props) => {
	let router = <Loader/>;
	return <Layout>{router}</Layout>;
};


export default App;
