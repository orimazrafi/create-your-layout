import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layouts } from "./Pages/Layouts/Layouts";
import { Configuration } from "./Pages/Configuration/Configuration";
import { Navbar } from "./Components/Navbar/Navbar";
import { PagesWrapper } from "./Elements/PagesWrapper";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <PagesWrapper>
        <Router>
          <Switch>
            <Route path="/" exact component={Layouts}></Route>
            <Route
              path="/configuration"
              exact
              component={Configuration}
            ></Route>
          </Switch>
        </Router>
      </PagesWrapper>
    </>
  );
}

export default App;
