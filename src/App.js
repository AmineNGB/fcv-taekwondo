import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

// import files created
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Trainers from "./pages/Trainers";
import Club from "./pages/Club";
// import Css files
import "./assets/styles.scss";

const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/notreclub" exact component={Club} />
          <Route path="/nosentraineurs" exact component={Trainers} />
          <Route path="/noshoraires" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
