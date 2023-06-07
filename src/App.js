// import './App.css';
import React from "react";
import Home from './components/Home'
import Info from './components/Info'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route path="/info" element={<Info/>} />
          <Route path="/" element={<Home/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
