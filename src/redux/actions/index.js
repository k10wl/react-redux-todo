import store from "../store";

// Actions upon tasks
export const addTodo = (newTodo) => {
  return {
    type: "ADD_TODO",
    payload: newTodo,
  };
};

export const deleteTodo = (removeTodo) => {
  return {
    type: "DELETE_TODO",
    payload: removeTodo,
  };
};

export const toggleTodo = (switchTodoState) => {
  return {
    type: "TOGGLE_TODO",
    payload: switchTodoState,
  };
};

export const deleteDone = () => {
  return {
    type: "DELETE_DONE",
  };
};

export const deleteAll = () => {
  return {
    type: "DELETE_ALL",
  };
};

// Actions upon lists

export const createList = (newListName) => {
  return {
    type: "CREATE_LIST",
    payload: newListName,
  };
};

export const switchList = (swapList) => {
  return {
    type: "SWITCH_LIST",
    payload: swapList,
  };
};

const deleteList = (removeList) => {
  return {
    type: "DELETE_LIST",
    payload: removeList,
  };
};

export const switchListAndDeleteList = (remove) => {
  return async (dispatch) => {
    const searchWhichListWasPrev =
      store
        .getState()
        .storage.map((x) => x.list)
        .indexOf(remove) - 1;
    const switchToPrev = store.getState().storage[searchWhichListWasPrev].list;
    dispatch(switchList(switchToPrev));
    dispatch(deleteList(remove));
  };
};
