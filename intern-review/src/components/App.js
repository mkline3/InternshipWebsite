import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import logo from './logo.svg';
import '../styles/App.css';
//var ReactRouter = require('react-router-dom');
//var Router = ReactRouter.BrowserRouter;
//var Route = ReactRouter.Route;
//var Switch = ReactRouter.Switch;
var Search = require('./Search');
var Nav = require('./Nav');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path = '/Search' componoent = {Search}/>
          <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>

        <header className="App-header">


          <p>
            Welcome to the internship webpage.
          </p>
        </header>
      </div>
    );
  }
}

export default App;