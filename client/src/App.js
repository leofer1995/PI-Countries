//import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './components/landing.jsx';
import Flags from './components/flags.jsx';
import NavigationBar from './components/navigationBar.jsx';
import Controller from './components/controller.jsx';
import Home from './components/home.jsx';

function App() {
  
  return (
    <Router>
      <Route path='/'>
        <NavigationBar />
      </Route>
      <Route exact path="/">
         <Landing />
      </Route>
      <Route exact path = '/home'>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
