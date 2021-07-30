import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Error from "../components/Error";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Login";
  });

  const onSubmitLogin = (event) => {
    event.preventDefault();

    const payload = { email, password };

    dispatch(loginUser(payload));
  };

  return (
    <div className="login-form form-field">
      <Error />
      <div className="form-hd">
        <h1>Welcome Back!</h1>
        <p>We are delighted to have you back!</p>
      </div>
      <div className="form-wrap">
        <form onSubmit={onSubmitLogin}>
          <div className="form-control">
            <label>Email</label>
            <input
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-btn-wrap">
            <button className="btn">Login</button>
          </div>
          <div className="form-info">
            <p>
              Don't have an account ? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
