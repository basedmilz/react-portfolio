import React from 'react';
import './App.css';
import Header from './component/Header.js';
import HomePage from './component/Homepage';
import Resume from './component/ResumePage';
import Projects from './component/Projects';
import Contact from './component/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
        <Route path="/home" exact component = {HomePage} />
        <Route path="/resume" exact component = {Resume}/>
        <Route path="/projects" exact component = {Projects} />
        <Route path="/contact" exact component = {Contact}/>
        </Switch>
      </div>
    </Router>
  );  
}


export default App;
