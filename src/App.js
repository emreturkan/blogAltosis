import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import PostSingle from "./pages/PostSingle";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/posts/:id">
            <PostSingle />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
