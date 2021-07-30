import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Register from "./views/Register";
import Login from "./views/Login";
import Home from "./views/Home";
import NewPost from "./views/NewPost";
import EditPost from "./views/EditPost";
import SinglePost from "./views/SinglePost";
import Profile from "./views/Profile";
import { PublicRoute, ProtectedRoute } from "./helper/authRoute";
import "./normalize.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/register" component={Register} />
            <Route exact path="/posts/:id" component={SinglePost} />
            <ProtectedRoute exact path="/new" component={NewPost} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/posts/:id/edit" component={EditPost} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
