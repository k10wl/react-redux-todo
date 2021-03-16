let initialState = {
	storage: [
		{
			list: "Default",
			checked: true,
			taskStore: [ { task: "n1t1", completed: false }, { task: "n1t2", completed: true } ]
		},
		{ list: "secondary", checked: false, taskStore: [ { task: "test2", completed: false } ] },
	],
	currentList: 'Default',
}

const taskStorage = ( state = initialState, action ) => {
	switch ( action.type ) {

		// Controlling tasks
		case 'ADD_TODO':
			return {
				...state,
				storage: [ ...state.storage.map( add => {
					if ( add.list === state.currentList ) {
						add.taskStore.push( { task: action.payload, completed: false } )
					}
					return add
				} ) ],
			}
		case 'DELETE_TODO':
			return {
				...state,
				storage: [ ...state.storage.map( del => {
					if ( del.list === state.currentList ) {
						del.taskStore = del.taskStore.filter( del => del.task !== action.payload )
					}
					return del
				} ) ]
			}
		case 'TOGGLE_TODO':
			return {
				...state,
				storage: [ ...state.storage.map( set => {
					if ( set.list === state.currentList ) {
						set.taskStore.map( toggle => {
							if ( toggle.task === action.payload ) {
								toggle.completed = !toggle.completed
							}
							return toggle
						} )
					}
					return set;
				} ) ]
			}
		case 'DELETE_DONE':
			return {
				...state,
				storage: [ ...state.storage.map( del => {
						if ( del.list === state.currentList ) {
							del.taskStore = del.taskStore.filter( remove => remove.completed !== true )
						}
						return del
					}
				) ]
			}
		case 'DELETE_ALL':
			return {
				...state,
				storage: [ ...state.storage.map( clear => {
						if ( clear.list === state.currentList ) {
							clear.taskStore = []
						}
						return clear
					}
				) ]
			}

		//	Controlling lists
		case 'CREATE_LIST':
			return {
				...state,
				storage: [ ...state.storage, { list: action.payload, checked: false, taskStore: [] } ]
			}
		case 'SWITCH_LIST':
			return {
				...state,
				storage: [ ...state.storage.map( toggle => {
					if ( toggle.list === action.payload ) {
						toggle.checked = true
					} else if ( toggle.list !== action.payload ) {
						toggle.checked = false
					}
					return toggle
				} ) ],
				currentList: action.payload
			}

		//	Default
		default:
			return state
	}
}

export default taskStorage

