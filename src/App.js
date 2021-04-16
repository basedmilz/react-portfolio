import React from 'react';
import './App.css';
import Header from './component/Header.js';
import HomePage from './component/Homepage';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Router>

          <Header />

          <Switch>
            <Route path="/home" exact component={HomePage} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}


export default App;
