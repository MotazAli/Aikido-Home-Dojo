import React from 'react';
import {BrowserRouter as Router , Switch,Route } from 'react-router-dom';
import Header from './components/header-component/header';
import Home from './components/home-component/home';
import Team from './components/team-component/Team';

function App() {



  return (
    <React.Fragment>
      
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/team" exact component={Team} />
        </Switch>
      </Router>



      {/* <Home /> */}
    </React.Fragment>
  );
}

export default App;
