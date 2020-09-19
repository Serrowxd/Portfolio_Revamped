import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Landing from "./routes/Landing";
import LeftNav from "./components/LeftNav";

const App = () => {
  const [nav, updateNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        if (nav !== false) {
          updateNav(false);
        }
        break;
      default:
        if (nav === false) {
          updateNav(true);
        }
    }
  }, [location]);

  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Landing} />

        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <LeftNav nav={nav} />
      </Layout>
    </Switch>
  );
};

export default App;

// Adding LeftNav below the secondary pages allows it to function normally, but it might be easier to just hide it and show it on all the pages?
