import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation';
import Traffic from './components/Traffic';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/traffic" exact component={Traffic} />
        
      </Switch>

    </Router>
 
  );
}

export default App;
