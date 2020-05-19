import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home.jsx";
import Signup from "./signup.jsx";
import Questionaries from "./questinaries.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/questionaries" exact component={Questionaries} />
        </Switch>
      </Router>
    );
  }
}

export default App;
