import React from 'react';

import './App.css';
import Nav from './Components/nav.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Components/Home'

function App() {
  const checkAuth = true;
  return (
    <div className="">
      <header className="">
       <div>
         <Router>
         <Nav/>
         <Switch>
         <Route path="/Projects" onEnter = {checkAuth} render = {()=>(<div>Projects</div>)}></Route>  
          <Route path="/Resources" render = {() => (<div>Resources</div>)}></Route>         
          <Route exact path="/" component = {Home}></Route>
         </Switch>
         </Router>
       </div>
      </header>
    </div>
  );

}

export default App;
