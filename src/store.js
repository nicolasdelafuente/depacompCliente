//Encargado del state de toda la aplicación
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    //codigo para usar redux developer tools en chrome
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
