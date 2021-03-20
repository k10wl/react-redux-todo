import { applyMiddleware, compose, createStore } from "redux";
import taskStorage from "./reducer";
import thunk from "redux-thunk";


const store = createStore(
	taskStorage,
	compose( applyMiddleware( thunk ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
)

export default store