import React, { useState } from "react";
import { Button, Grid, Input } from "@material-ui/core";
import { addTodo, createList } from "../redux/actions";
import myStyles from "../MaterialUI/myStyles";
import { connect, useDispatch } from "react-redux";

const ListsInputField = ( props ) => {

	const dispatch = useDispatch();
	const classes = myStyles()
	let [ list, setList ] = useState( '' )

	// The following code is here coz i fucked up with nesting <input> and <button> inside of <form>
	// - This one binds clears input field after its info is passed into redux
	const emptyInputFieldAfterDispatch = () => {
		setList( '' )
	}
	// - And this one allows user to "submit" task after pressing enter key
	const dispatchOnEnterDown = ( e ) => {
		if ( e.keyCode === 13 ) {
			filterTaskInput()
			emptyInputFieldAfterDispatch()
		}
	}

	// This prevents duplicating tasks and creating empty tasks
	// - Im not sure if its right to map whole redux storage every time but i have not worked out better solution
	const taskStorageWithoutSpaces = props.storage.map( todo => todo.list.replace( / /g, '' ) )
	const nameWithoutSpaces = list.replace( / /g, '' )
	// - Just a boolean with filtering stuff. I feel like this is nice way to separate options from actual sorting
	const filterOptions = (
		taskStorageWithoutSpaces.indexOf( nameWithoutSpaces ) === -1 &&
		list.length !== 0 &&
		( list.match( / /g ) || [] ).length !== list.length
	)
	const filterTaskInput = () => {
		if ( filterOptions ) {
			dispatch( createList( list ) )
		} else {
			alert( 'Something went wrong!' )
		}
	}

	return (
		<Grid
			className={ classes.lists }
			item
			container
			sm={ 11 }
			justify={ "center" }>
			<Input type={ 'text' }
						 fullWidth
						 value={ list }
						 placeholder={ 'Create new list' }
						 inputProps={ { style: { textAlign: 'center', backgroundColor: 'rgb(128 138 197)' } } }
						 onChange={ e => setList( e.target.value ) }
						 onKeyDown={ dispatchOnEnterDown }/>
			<Button
				color='secondary'
				variant='contained'
				onClick={ () => {
					filterTaskInput()
					emptyInputFieldAfterDispatch()
				} }
			> Create new list </Button>
		</Grid>
	)
}

const mapStateToProps = function ( state ) {
	return {
		state,
		storage: state.storage
	}
}

export default connect( mapStateToProps )( ListsInputField )