import React, { Component } from "react";
import loginView from "./src/LoginView";
import registerView from "./src/registerView";
import { Actions, Scene, Router } from "react-native-router-flux";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={loginView} title="Login" hideNavBar />
    <Scene key="register" component={registerView} title="Register" />
  </Scene>
);

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
}
