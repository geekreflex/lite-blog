import React from "react";
import { Link } from "react-router-dom";
import { IoLibraryOutline } from "react-icons/io5";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="hd-wrap">
          <div className="hd-wrap-left">
            <div className="hd-logo">
              <Link to="/">Lite.</Link>
            </div>
            <div className="hd-link-icons">
              <Link to="/">
                <IoLibraryOutline />
              </Link>
            </div>
            <div>
              <Search />
            </div>
          </div>
          <div className="hd-wrap-right">
            <div>
              <Link className="link-norm" to="/explore">
                Explore
              </Link>
            </div>
            <div>
              <Link className="btn-main" to="/posts/new">
                Create Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
