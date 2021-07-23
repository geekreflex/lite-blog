import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Register from "./views/Register";
import Login from "./views/Login";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exac path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
