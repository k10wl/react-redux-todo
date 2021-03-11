import { createStore } from "redux";
import taskStorage from "./reducer";

const store = createStore(
	taskStorage,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store