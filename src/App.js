import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </Fragment>
  );
}

export default App;
