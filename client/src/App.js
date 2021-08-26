//import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './components/landing.jsx';
import NavigationBar from './components/navigationBar.jsx';
import Home from './components/home.jsx';
import AddActivity from './components/addActivity.jsx';

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
      <Route exact path = '/AddActivity'>
        <AddActivity />
      </Route>
    </Router>
  );
}

export default App;
