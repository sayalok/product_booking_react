/**
 *
 * This File is responsible to set All the reducers and create the redux store with them
 * It Will only return store
 *
 */

 import { createStore, applyMiddleware, compose, combineReducers } from "redux";
 import thunk from "redux-thunk";
 
 //reducers
 import productReducers from "../reducers/ProductReducer";
 import bookingReducers from "../reducers/BookingReducer";
 
 
 const rootReducers = combineReducers({
    productReducers: productReducers,
    bookingReducers: bookingReducers,
 });
 
 // Enable debugger for development purpose will be remove when in production
 const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
 
 const store = createStore(
	rootReducers,
	composeEnhancers(applyMiddleware(thunk))
 );
 
 export default store;
 