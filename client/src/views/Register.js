import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      <div className="user-form">
        <form>
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
          <div className="form-btn">
            <button className="btn">Register</button>
          </div>
          <div className="form-info">
            <p>
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
