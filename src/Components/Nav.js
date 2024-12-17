import React, { useState } from "react";
import "./Registration.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [user, setUser] = useState();
  return (
    <div>
      <nav style={{flexDirection:"row" , justifyItems:"flex-start"}}>
        
        <div className="navbar">
          <div>
          <NavLink
           style={({ isActive }) => {
              return { color: isActive ?"#fde8bb" : "white" ,textDecoration:"none", margin:50, alignItems: "start"  };
            }}
            to="/categories"
          >
            Categories
          </NavLink>
          </div>
          <div >
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "#fde8bb" : "white" ,textDecoration:"none", margin:50,alignItems: "start" };
              }}
              to="/recipes"
            >
              Recipes
            </NavLink>
          </div>
          <div>
            <NavLink 
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fde8bb" : "white",textDecoration:"none", margin:50, alignItems: "start"};
              }}
              to="/creators"
            >
              Creators
            </NavLink>
          </div>
       
          <div>
            <button className="logout-button">
            <NavLink style={{textDecoration:"none", color:"#f88520", fontWeight:550}} to="/">Logout</NavLink></button>
          </div>
           </div>
      </nav>
    </div>


  );
};

export default Nav;
