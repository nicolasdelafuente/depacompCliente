import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Agenda from "./components/proyectos/Agenda";
import Persona from "./components/proyectos/Persona";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/agenda" component={Agenda} />
        <Route exact path="/persona" component={Persona} />
      </Switch>
    </Router>
  );
}

export default App;
