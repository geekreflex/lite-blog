import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import Error from "../components/Error";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onSubmitRegister = (event) => {
    event.preventDefault();

    const payload = { name, email, password };

    dispatch(registerUser(payload));
  };

  return (
    <div className="register-form form-field">
      <Error />
      <div className="form-hd">
        <h1>Create An Account</h1>
      </div>
      <div className="form-wrap">
        <form onSubmit={onSubmitRegister}>
          <div className="form-control">
            <label>Full Name</label>
            <input
              placeholder="e.g. John Doe"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label>Email</label>
            <input
              placeholder="john@example.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              placeholder="@#ghsgshjh6"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-btn-wrap">
            <button className="btn">Register</button>
          </div>
          <div className="form-info">
            <p>
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
