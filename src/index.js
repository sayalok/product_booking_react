import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

//redux
import { Provider } from "react-redux";

// Geetting the store
import store from "./store/stores/";

//css
import "bootstrap/dist/css/bootstrap.min.css";


const app = (
	<Provider store={store}>
		<BrowserRouter>
		<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(
	<React.StrictMode>{app}</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
