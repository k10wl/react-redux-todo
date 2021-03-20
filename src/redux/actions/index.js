import store from "../store";

// Actions upon tasks
export const addTodo = ( todo ) => {
	return {
		type: 'ADD_TODO',
		payload: todo,
	}
}

export const deleteTodo = ( todo ) => {
	return {
		type: 'DELETE_TODO',
		payload: todo,
	}
}

export const toggleTodo = ( todo ) => {
	return {
		type: 'TOGGLE_TODO',
		payload: todo
	}
}

export const deleteDone = () => {
	return {
		type: 'DELETE_DONE'
	}
}

export const deleteAll = () => {
	return {
		type: 'DELETE_ALL'
	}
}

// Actions upon lists

export const createList = ( createList ) => {
	return {
		type: 'CREATE_LIST',
		payload: createList
	}
}

export const switchList = ( switchList ) => {
	return {
		type: 'SWITCH_LIST',
		payload: switchList
	}
}

const deleteList = ( removeList ) => {
	return {
		type: 'DELETE_LIST',
		payload: removeList
	}
}

export const switchListAndDeleteList = ( remove ) => {
	return async ( dispatch ) => {
		let searchWhichListWasPrev = store.getState().storage.map( x => x.list ).indexOf( remove ) - 1
		let switchToPrev = store.getState().storage[ searchWhichListWasPrev ].list
		dispatch( switchList( switchToPrev ) )
		dispatch( deleteList( remove ) )
	}
};
