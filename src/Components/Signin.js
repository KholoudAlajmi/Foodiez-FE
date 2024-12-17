import React, { useState } from "react";
import "./Registration.css";
import { signin } from "../api/auth";
// import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

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
      {/* <img className="image" src={image} alt="" /> */}
   <div className="container" style={{width:"100%",display:"flex",flexDirection:"column" ,justifyContent:"center",alignItems:"center", marginTop:"5%"}} >  

      <div style={{justifyContent:"start"}}>
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
    {/* signup */}


   
     {/* <div className='header'> */}
     {/* <div className="text">{query}</div>
     <form onSubmit={handleFormSubmit1}>
       {/* </div> */}
       {/* <div className='inputs'> */}
       {/* <div className="input">
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
         {/* <img src={password_icon} alt="" /> */}
         {/* <input
           onChange={(e) => {
             setQuery(e.target.value);
           }}
           type="password"
           name="password"
           placeholder="Password"
         ></input>
       </div>
       {/* </div> */}
       {/* {query === "Sign Up" ? (
         <div
        
           onClick={() => {
             setQuery("Signin");
           }}
         > */}
           {/* {" "}
           I have an account, <span>Signin !</span>
         </div>
       ) : (
         <div
       
           onClick={() => {
             setQuery("Sign Up");
           }}
         >
           I don't have an account, <span>Sign Up!</span>
         </div>
       )} */}
     
         {/* <button
           className={query === "Signin" ? "submit gray" : "submit"}
           onClick={() => {}}
         >
           {query}{" "}
         </button>
  
     </form>  */}
     
   
    </div> 
   </div>
  );
};

export default Signin;
