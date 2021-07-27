import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Register from "./views/Register";
import Login from "./views/Login";
import Home from "./views/Home";
import NewPost from "./views/NewPost";
import SinglePost from "./views/SinglePost";
// import { useSelector } from "react-redux";

const App = () => {
  // const isAuth = useSelector((state) => state.user.isAuthenticated);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/new" component={NewPost} />
            <Route exact path="/posts/:id" component={SinglePost} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
