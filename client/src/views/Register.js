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
    <main>
      <Error />
      <div>
        <form onSubmit={onSubmitRegister}>
          <div>
            <label>Full Name</label>
            <input
              placeholder="e.g. John Doe"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              placeholder="john@example.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              placeholder="@#ghsgshjh6"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button>Register</button>
          </div>
          <div>
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
