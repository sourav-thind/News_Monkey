
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <> 
       <Router>
       <Navbar />
      <Routes>
          <Route exact path="/" element={<News key="home" pageSize={8} country="in" category="general"/>} />
          <Route exact path="/business" element={<News key="buniness" pageSize={8} country="in" category="business"/>} />
          <Route exact path="/science" element={<News key="science" pageSize={8} country="in" category="science"/>} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={8} country="in" category="entertainment"/>} />
          <Route exact path="/health" element={<News key="health" pageSize={8} country="in" category="health"/>} />
          <Route exact path="/sports" element={<News key="sports" pageSize={8} country="in" category="sports"/>} />
          <Route exact path="/technology" element={<News key="technology" pageSize={8} country="in" category="technology"/>} />
         


        
      </Routes>
    </Router>
      
      
      </>
    )
  }
}
