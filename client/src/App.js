//import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './components/landing.jsx';
import NavigationBar from './components/navigationBar.jsx';
import Home from './components/home.jsx';
import AddActivity from './components/addActivity.jsx';
import Country from './components/country.jsx';

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
      <Route exact path = '/country/:code'
        render = {({match}) => <Country id={match.params.code}/>}>
      </Route>
    </Router>
  );
}

export default App;
