import React, { Component } from 'react'
import Home from './pages/Home/Home';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

        </div>
      </Router>
    )
  }
}

export default App;
