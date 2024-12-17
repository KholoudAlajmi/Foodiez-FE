import React from 'react'
import "./Registration.css";
import Nav from './Nav';

const Categories = () => {
  return (
  
    <div className="background" >
    <Nav/>  
        <div className="container" style={{width:"100%",display:"flex",flexDirection:"column" ,justifyContent:"center",alignItems:"center", marginTop:"5%"}}>
       
        <p style={{color:"red"}}>Categories</p>
        </div> 
      </div>
     
  
  )
}

export default Categories
