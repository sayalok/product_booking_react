import React from "react";

//Routes
import Router from "./route/Router";

//Components
import Layout from "./components/Layout";

const App = (props) => {
	return <Layout><Router/></Layout>;
};


export default App;
