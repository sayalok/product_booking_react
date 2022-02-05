import React from "react";
import { Switch , Route } from "react-router-dom";
import Booking from "../containers/Booking";
import Products from "../containers/Products";

const PublicRoute = props => {
  return (
    <Switch >
      <Route path="/" exact component={Products} />
      <Route path="/booking_list" exact component={Booking} />
      {/* <Redirect to="/" /> */}

    </Switch>
  );
};


export default PublicRoute;
