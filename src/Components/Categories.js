import React from 'react'
import "./Registration.css";
import Nav from './Nav';

const Categories = () => {
  return (
  
    <div className="background" style={{display:'flex', flexDirection: 'column'}} >
    <Nav/>  
        <div className="container" style={{width:"100%",display:"flex",flexDirection:"column" ,justifyContent:"center",alignItems:"center", marginTop:"5%"}}>
       
        <p style={{color:"red"}}>Categories</p>
        </div> 

        <p className="logo-nav-slogan">Share your recipes</p>
      </div>
     
  
  )
}

export default Categories
