require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");

const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const commentRoute = require("./routes/commentRoute");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
