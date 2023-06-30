import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div className="container">
      <div className="loginDetails">
        <div className="userIcon">
          <UserOutlined style={{ fontSize: "75px" }} />
        </div>
        <h1>Login Form</h1>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Login</button>
        <p>
          Create an account <Link to="/signup" className="link-signup"> Signup Now </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
