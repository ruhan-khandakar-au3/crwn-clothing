import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Fragment>
  );
}

export default App;
