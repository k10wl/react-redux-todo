import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import taskStorage from "./reducer";

const store = createStore(
  taskStorage,
  compose(
    applyMiddleware(thunk),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
