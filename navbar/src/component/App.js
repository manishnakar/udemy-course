
import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Pricing from '../pages/Pricing';
import Features from '../pages/Features';
import Demo from '../pages/Demo';
import Testimonials from '../pages/Testimonials';
import Navbar from '../navbar/Navbar';


import './App.css';


function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home}  />
        <Route path="/pricing" component={Pricing} />
        <Route path="/demo" component={Demo} />        
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/features" component={Features} />
      </Router>
    </div>
  );
}

export default App;
