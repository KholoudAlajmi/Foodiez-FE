import React, { useContext, useState } from "react";
import { signup } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import "./Registration.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assests/Logo.PNG";

const Signup = () => {
  const [query, setQuery] = useState("Signup");
  const [userInfo, setuserInfo] = useState({
    username: "",
    uploadImage: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  // const { mutate : signin} = useMutation({
  //   mutationKey: ["signin"],
  //   mutationFn: () => signin(userInfo),
  //   onSuccess: () => {
  //     setuserInfo(true);
  //     navigate("/");
  //   },
  // });

  // const { mutate : signup} = useMutation({
  //   mutationKey: ["signup"],
  //   mutationFn: () => signup(userInfo),
  //   onSuccess: () => {
  //     setuserInfo(true);
  //     navigate("/");
  //   },
  // });

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   mutate : signin();
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    mutate: signup();
  };
  return (
    <div className="background">
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <div className="logo-image-div">
          <img
            style={{
              display: "flex",
              width: 320,
              marginRight: 200,
              alignContent: "center",
            }}
            src={Logo}
            alt="logo"
          />
          <h1 className="logo-name">YumHub</h1>
        </div>
        <div style={{ alignContent: "center", alignItems: "center" }}>
          <div className="text">Sign up</div>
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
                type="file"
                name="upload image"
                placeholder="upload Image"
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

            <div className="input">
              <input
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                type="password"
                name="confirm password"
                placeholder="confirm Password"
              ></input>
            </div>

            {query === "Signin" ? (
              <div
                style={{ color: "gray" }}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                {" "}
                I don't have an account, <span>Sign Up!</span>
              </div>
            ) : (
              <div
                style={{ color: "gray" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                I have an account, <span>Sign in!</span>
              </div>
            )}

            <button
              style={{ color: "white" }}
              className={query === "Signup" ? "submit gray" : "submit"}
              onClick={() => {
                navigate("/");
              }}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
