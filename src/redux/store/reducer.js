let initialState = { storage: [] }

const taskStorage = ( state = initialState, action ) => {
	switch ( action.type ) {
		case 'ADD_TODO':
			return {
				storage: [ ...state.storage, { task: action.payload, completed: false } ]
			}
		case 'DELETE_TODO':
			return {
				storage: [ ...state.storage.filter( remove => remove.task !== action.payload ) ]
			}
		case 'TOGGLE_TODO':
			return {
				storage: [ ...state.storage.map( set => {
					if ( set.task === action.payload ) {
						set.completed = !set.completed
					}
					return set
				} ) ]
			}
		case 'DELETE_DONE':
			return {
				storage: [ ...state.storage.filter( remove => remove.completed !== true ) ]
			}
		case 'DELETE_ALL':
			return initialState
		default:
			return state
	}
}

export default taskStorage

