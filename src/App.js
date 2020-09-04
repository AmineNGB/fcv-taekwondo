import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

// import files created
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import Css files
import "./assets/styles.scss";

const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/notreclub" exact component={Home} />
          <Route path="/nosentraineurs" exact component={Home} />
          <Route path="/noshoraires" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
