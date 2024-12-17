import React, { useState } from "react";
import "./Registration.css";
import { signin } from "../api/auth";
// import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import Logo from '../assests/Logo.PNG';

const Signin = () => {
  const [query, setQuery] = useState("Signin");
  const [userInfo, setuserInfo] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  // const { mutate : signup} = useMutation({
  //   mutationKey: ["signup"],
  //   mutationFn: () => signup(userInfo),
  //   onSuccess: () => {
  //     setuserInfo(true);
  //     navigate("/categories");
  //   },
  // });

  // const { mutate : signin} = useMutation({
  //   mutationKey: ["signin"],
  //   mutationFn: () => signin(userInfo),
  //   onSuccess: () => {
  //     setuserInfo(false);
  //     navigate("/");
  //   },
  // });

  

  const handleFormSubmit = (e) => {
    e.preventDefault();

    mutate : signin();
  };

 
  

  return (
    <div className="background">
    <div className="container" style={{width:"100%",display:"flex",justifyContent:"center",  marginTop:"5%"}} > 
    
      <div className="logo-image-div">
    <img style={{display:"flex", width:320, marginRight:200,alignContent:"center" }} src={Logo} alt="logo" />
    <h1 className="logo-name">YumHub</h1>
    </div>

      <div style={{ alignContent:"center" , alignItems:"center"}}>
      <div className="text">Sign in</div>
      <form onSubmit={handleFormSubmit}>
        <div className="input">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="usename"
           
          ></input>
        </div> 

         <div className="input">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Password"
          ></input>
        </div>
     
        {query === "Sign Up" ? (
          <div style={{color: "gray"}}
       
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            I have an account, <span>Sign in!</span>
          </div>
        ) : (
          <div style={{color: "gray"}}
       
            onClick={() => {
              navigate("/signup");
            }}
          >
            I don't have an account, <span>Sign up!</span>
          </div>
        )}
        




          <button style={{color: "white"}}
            className={query === "Signin" ? "submit gray" : "submit"}
            onClick={() => { navigate("/categories");}}
          >
            Sign in
          </button>
      



      </form>
   
</div>
    </div> 
   </div>
  );
};

export default Signin;
