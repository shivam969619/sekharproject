import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Home.js";
import Header from './Header.js';
import './App.scss';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;
