import React from 'react'
import { connect, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";
import { Button, Grid, Typography } from "@material-ui/core";
import myStyles from "../MaterialUI/myStyles";

const TodoItem = ( props ) => {

	const dispatch = useDispatch()
	const classes = myStyles()

	return (
		<Grid>
			{ props.tasks.map( todo =>
				<Grid
					key={ todo.task }
					className={ classes.itemsSeparation }
					justify={ "center" }
					alignItems={ 'baseline' }
					container item
					sm={ 12 }>

					<Grid item sm={ 9 }>
						<Typography
							variant='body1'
							className={ `${ todo.completed && classes.completedTask }` }
						> { todo.task } </Typography>
					</Grid>

					<Grid item sm={ 1 }>
						<Button onClick={ () => {
							dispatch( toggleTodo( todo.task ) )
						} }>&#10003;</Button>
					</Grid>

					<Grid item sm={ 1 }>
						<Button onClick={ () => dispatch( deleteTodo( todo.task ) ) }>&#10005;</Button>
					</Grid>

				</Grid>
			) }
		</Grid>
		// <h1>d</h1>
	)
}

const mapStateToProps = function ( state ) {
	return {
		state,
		tasks: state.storage.find( task => task.list === state.currentList ).taskStore
	}
}

export default connect( mapStateToProps )( TodoItem )

