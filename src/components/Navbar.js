import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import '../components/Navbar-style.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="nav-styl navbar bg-body-tertiary">
        <div class="container-fluid">
         <Link to='/'>
         <h1 style={{color:'white', fontWeight:'800'}}>My ShOw</h1>
         </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
