import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Home from "./container/Home/Home";
import About from "./container/About/About";

const App = () => {
  const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <React.Fragment>
      <Header />
      {routes}
    </React.Fragment>
  );
};

export default App;
