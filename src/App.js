import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Entrevistas from "./components/page/MisEntrevistas";
import Persona from "./components/page/Persona";
import NotFound from "./components/page/NotFound";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/entrevistas" component={Entrevistas} />
      <Route exact path="/persona" component={Persona} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
