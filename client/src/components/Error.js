import React from "react";
import { useSelector } from "react-redux";

const Error = () => {
  const error = useSelector((state) => state.user.error);

  return <div>{error ? <span>{error}</span> : ""}</div>;
};

export default Error;
