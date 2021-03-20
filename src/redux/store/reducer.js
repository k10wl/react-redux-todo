const initialState = {
  storage: [
    {
      list: "Default",
      checked: true,
      taskStore: [],
    },
  ],
  currentList: "Default",
};

const taskStorage = (state = initialState, action) => {
  const locateSelectedList = state.storage.find(
    (x) => x.list === state.currentList
  );
  const locateSelectedTask = locateSelectedList.taskStore.find(
    (x) => x.task === action.payload
  );

  switch (action.type) {
    case "ADD_TODO":
      locateSelectedList.taskStore.push({
        task: action.payload,
        completed: false,
      });
      return {
        ...state,
      };
    case "DELETE_TODO":
      locateSelectedList.taskStore = locateSelectedList.taskStore.filter(
        (x) => x.task !== action.payload
      );
      return {
        ...state,
      };
    case "TOGGLE_TODO":
      locateSelectedTask.completed = !locateSelectedTask.completed;
      return {
        ...state,
      };
    case "DELETE_DONE":
      locateSelectedList.taskStore = locateSelectedList.taskStore.filter(
        (x) => x.completed !== true
      );
      return {
        ...state,
      };
    case "DELETE_ALL":
      locateSelectedList.taskStore = [];
      return {
        ...state,
      };

    case "CREATE_LIST":
      return {
        ...state,
        storage: [
          ...state.storage,
          { list: action.payload, checked: false, taskStore: [] },
        ],
      };
    case "SWITCH_LIST":
      state.storage.map((toggle) => {
        const change = toggle;
        if (toggle.list === action.payload) change.checked = true;
        if (toggle.list !== action.payload) change.checked = false;
        return change;
      });
      return {
        ...state,
        currentList: action.payload,
      };
    case "DELETE_LIST":
      return {
        ...state,
        storage: [
          ...state.storage.filter((remove) => remove.list !== action.payload),
        ],
      };

    default:
      return { ...state };
  }
};

export default taskStorage;
