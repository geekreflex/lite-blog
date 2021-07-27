export const BASE_URL = () =>
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://lite-blog.herokuapp.com";
