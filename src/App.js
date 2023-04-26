
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import About from './components/About';

  const App =()=> {
 
const [progress, setProgress] = useState(30)
 
 
   
    return (
      <> 
       <Router>
       <Navbar />
       <LoadingBar
        color='#f11946'
        height={3}  
        progress={progress}
      
      />
      <Routes>
          <Route exact path="/" element={ <News setProgress={setProgress} key="home" pageSize={8} country="in" category="general"/>} />
          <Route exact path="/business" element={ <News setProgress={setProgress} key="buniness" pageSize={8} country="in" category="business"/>} />
          <Route exact path="/science" element={ <News setProgress={setProgress} key="science" pageSize={8} country="in" category="science"/>} />
          <Route exact path="/entertainment" element={ <News setProgress={setProgress} key="entertainment" pageSize={8} country="in" category="entertainment"/>} />
          <Route exact path="/health" element={ <News setProgress={setProgress} key="health" pageSize={8} country="in" category="health"/>} />
          <Route exact path="/sports" element={ <News setProgress={setProgress} key="sports" pageSize={8} country="in" category="sports"/>} />
          <Route exact path="/technology" element={ <News setProgress={setProgress} key="technology" pageSize={8} country="in" category="technology"/>} />
          <Route exact path="/about" element={ <About/>} />
         


        
      </Routes>
    </Router>
      
      
      </>
    )
  }

export default App