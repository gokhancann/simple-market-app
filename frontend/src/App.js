import React, { Component } from 'react'
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
          </Routes>

        </div>
      </Router>
    )
  }
}

export default App;
