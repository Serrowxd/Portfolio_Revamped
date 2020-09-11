import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./styles/styles.css";
import * as serviceWorker from "./serviceWorker";

// Imports
import App from "./App";
import About from "./components/About";
import Projects from "./components/Projects";

// Component imports should be done from a reducer - Future Dated

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
