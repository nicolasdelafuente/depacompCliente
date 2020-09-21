import React from "react";

import Header from "./components/Header";
import Entrevistas from "./components/Entrevistas";
import Seguimiento from "./components/Seguimiento";
import Seguimientos from "./components/Seguimientos";

import { BrowserRouter, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <div className="container p-5">
        <Switch>
          <Route exact path="/" component={Entrevistas} />
          <Route exact path="/seguimientos/:id" component={Seguimiento} />
          <Route exact path="/seguimientos" component={Seguimientos} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
