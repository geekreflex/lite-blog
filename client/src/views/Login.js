import React, { useState } from "react";
import { Link } from "react-router-dom";
import Error from "../components/Error";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onSubmitLogin = (event) => {
    event.preventDefault();

    const payload = { email, password };

    dispatch(loginUser(payload));
  };

  return (
    <main>
      <Error />
      <div>
        <form onSubmit={onSubmitLogin}>
          <div>
            <label>Email</label>
            <input
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button>Login</button>
          </div>
          <div>
            <p>
              Don't have an account ? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
