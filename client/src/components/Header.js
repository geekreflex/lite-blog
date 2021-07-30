import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const [visible, setVisible] = React.useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const toggleMenu = () => {
    setVisible(!visible);
  };

  React.useEffect(() => {
    console.log(visible);
  }, [visible]);

  return (
    <header>
      <div className="container">
        <div className="hd-wrap">
          <div className="hd-wrap-left">
            <a href="/" className="hd-logo">
              <h3>Lite Blog </h3>
            </a>
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
                <Link className="hd-link" to="/login">
                  Login
                </Link>
                <Link className="btn" to="/register">
                  Register
                </Link>
              </div>
            )}
          </div>

          <div className="burger-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <div
              className={visible ? "hd-wrap-mobile visible" : "hd-wrap-mobile"}
            >
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
                  <Link className="hd-link" to="/login">
                    Login
                  </Link>
                  <Link className="btn" to="/register">
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
