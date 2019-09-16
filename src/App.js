import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInUp from "./pages/SignIn-Up/SignIn-Up";

import { auth } from "./firebase/firebase-utils";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <Fragment>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInUp} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
