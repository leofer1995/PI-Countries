//import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './components/landing.jsx';
import Flags from './components/flags.jsx';
function App() {
  return (
    <Router>
      <Route exact path="/">
         <Landing />
      </Route>
      <Route exact path = '/home'>
        <Flags />
      </Route>
    </Router>
  );
}

export default App;
