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

export const createList = ( list ) => {
	return {
		type: 'CREATE_LIST',
		payload: list
	}
}

export const switchList = ( list ) => {
	return {
		type: 'SWITCH_LIST',
		payload: list
	}
}