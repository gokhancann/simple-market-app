import React, { Component } from 'react'
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>

            <Route path="/" element={<Home />} />


          </Routes>

        </div>
      </Router>
    )
  }
}

export default App;
