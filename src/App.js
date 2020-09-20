import React from "react";

import Header from "./components/Header";
import Entrevistas from "./components/Entrevistas";
import NuevoSeguimiento from "./components/NuevoSeguimiento";
import EditarSeguimiento from "./components/EditarSeguimiento";
import Seguimientos from "./components/Seguimientos";

import { BrowserRouter, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Entrevistas} />
          <Route
            exact
            path="/seguimientos/nuevo"
            component={NuevoSeguimiento}
          />
          <Route
            exact
            path="/seguimientos/editar/:id"
            component={EditarSeguimiento}
          />
          <Route exact path="/seguimientos" component={Seguimientos} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
