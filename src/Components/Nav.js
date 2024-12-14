import React from "react";

import { Link } from "react-router-dom";



const Nav = () => {

  return (

    <nav className="navbar">

      <Link to="/categories" className="nav-item">Categories</Link>

      <Link to="/recipes" className="nav-item">Recipes</Link>

      <Link to="/creators" className="nav-item">Creators</Link>

    </nav>

  );

};


export default Nav;
