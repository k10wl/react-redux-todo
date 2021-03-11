import React, { useState } from "react";
import { Box, Button, Grid, Input } from "@material-ui/core";
import { addTodo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import myStyles from "../MaterialUI/myStyles";

const InputField = () => {

	const dispatch = useDispatch()
	const classes = myStyles()

	// Stores text from input field as state
	const [ name, setName ] = useState( '' )

	// The following code is here coz i fucked up with nesting <input> and <button> inside of <form>
	// - This one binds clears input field after its info is passed into redux
	const emptyInputFieldAfterDispatch = () => {
		setName( '' )
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
	const taskStorage = useSelector( state => state.storage )
	const taskStorageWithoutSpaces = taskStorage.map( todo => todo.task.replace( / /g, '' ) )
	const nameWithoutSpaces = name.replace( / /g, '' )
	// - Just a boolean with filtering stuff. I feel like this is nice way to separate options from actual sorting
	const filterOptions = (
		taskStorageWithoutSpaces.indexOf( nameWithoutSpaces ) === -1 &&
		name.length !== 0 &&
		( name.match( / /g ) || [] ).length !== name.length
	)
	const filterTaskInput = () => {
		if ( filterOptions ) {
			dispatch( addTodo( name ) )
		} else {
			alert( 'Something went wrong!' )
		}
	}

	return (
		<Grid container>
			<Grid item sm={ 3 }> </Grid>
			<Grid className={ classes.footer } sm={ 10 } container item justify='center'>
				<Grid item sm={ 10 }>
					<Input
						fullWidth
						color='secondary'
						type="text"
						value={ name }
						placeholder='Enter your task here'
						onChange={ e => setName( e.target.value ) }
						onKeyDown={ dispatchOnEnterDown }
					/>
				</Grid>
				<Grid item sm={ 1 }>
					<Button
						color='secondary'
						variant='contained'
						onClick={ () => {
							filterTaskInput()
							emptyInputFieldAfterDispatch()
						} }
					>Add task</Button>
				</Grid>
				<Box className={ classes.footerBG }> </Box>
			</Grid>

		</Grid>
	)
}

export default InputField

