import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./Search";
import { logoutUser } from "../features/user/userSlice";

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header>
      <div className="container">
        <div className="hd-wrap">
          <div className="hd-wrap-left">
            <Link to="/" className="hd-logo">
              <h3>Lite Blog </h3>
            </Link>
          </div>
          <div className="hd-wrap-right">
            {isAuth ? (
              <div className="hd-user">
                <a href="#">
                  <h4>{user.name}</h4>
                </a>
                <Link className="hd-link" to="/new">
                  Create Post
                </Link>
                <button className="btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
