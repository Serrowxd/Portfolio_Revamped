import React, { useState, useEffect } from "react";

// Imports
import About from "./components/About";
import Projects from "./components/Projects";
import Layout from "./components/Layout";

// Component imports should be done from a reducer - Future Dated

import { BrowserRouter as Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
};

// Landing is being rendered in here for the time being since I don't really want to make a full component for it yet
const Landing = () => {
  return (
    <Layout>
      <div className="landing-wrapper">
        <div className="wrapper-filter"></div>
        <div className="jumbo">
          <div className="jumbo-name">
            <h1>Kevin Jolley</h1>
            <h2>Web Developer</h2>
          </div>
          <div className="jumbo-title">
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
