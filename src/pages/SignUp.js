import React from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="main-container">
      <div className="login-container">
        <h1 className="">User Sign up</h1>
        <div className="form-body">
          <div className="textbox">
            <TextField
              id="filled-basic"
              label="Username"
              variant="filled"
              style={{ width: "18rem" }}
            />
          </div>
          <div className="textbox">
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              style={{ width: "18rem" }}
            />
          </div>
          <div className="login-button">
            <Link to="/home">
              <Button
                variant="contained"
                style={{ width: "18rem", height: "3rem" }}
              >
                LOGIN
              </Button>
            </Link>
          </div>
          <div className="bottom-links">
            Already have an account?{" "}
            <span className="sign-up-link">
              <Link to="/">Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
