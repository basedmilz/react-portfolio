import React from 'react';
import './App.css';
import Header from './component/Header.js';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Header />
    
    
    
    
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
       
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

const routes = (
  <BrowserRouter>
  <div>
    <Route path ="" component/>
    <Route path ="" component/>
    <Route path ="" component/>
    <Route path ="" component/>
  </div>
  </BrowserRouter>
)

export default App;
