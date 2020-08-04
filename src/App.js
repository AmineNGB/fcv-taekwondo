import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

// import files created
import Home from "./pages/Home";

// import Css files
import "./assets/styles.scss";

const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Home} />
          <Route path="/trainers" exact component={Home} />
          <Route path="/gallery" exact component={Home} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
