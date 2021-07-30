import React from "react";
import { useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";

const Error = () => {
  const error = useSelector((state) => state.user.error);

  const handleCloseError = () => {
    let errorElem = document.querySelector(".error-msg");
    errorElem.classList.add("error-hidden");
  };

  return (
    <div>
      {error ? (
        <div className="error-msg">
          {error}
          <div className="error-msg-ic" onClick={handleCloseError}>
            <IoCloseOutline />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Error;
