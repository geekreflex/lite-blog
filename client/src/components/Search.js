import React from "react";
import { IoSearch, IoClose } from "react-icons/io5";

const Search = () => {
  return (
    <div className="hd-search-wrap">
      <div className="hd-search-icon">
        <span>
          <IoSearch />
        </span>
      </div>
      <form>
        <input placeholder="Search" />
      </form>
      <div className="hd-search-icon">
        <span>
          <IoClose />
        </span>
      </div>
    </div>
  );
};

export default Search;
