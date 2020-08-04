import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';



const App = () => {
  return ( 
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={NavBar} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;