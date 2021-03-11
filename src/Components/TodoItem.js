import React from 'react'
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";
import { Button, Grid, Typography } from "@material-ui/core";
import myStyles from "../MaterialUI/myStyles";

const TodoItem = ( props ) => {

	const dispatch = useDispatch()
	const classes = myStyles()

	// This changes status of task. I dont exactly understand how. I assume that component re-renders itself when props
	// getting an update. I'm not sure that i understand how exactly it works. I'm not sure this is correct way to do it
	const toggleStatus = () => props.completed ?  displayStatus = classes.completedTask : displayStatus = ''
	let displayStatus
	toggleStatus()

	return (
		<Grid className={ classes.itemsSeparation } justify={ "center" } alignItems={ 'baseline' } container item sm={ 12 }>
			<Grid item sm={ 9 }>
				<Typography
					variant='body1'
					className={ displayStatus }
				> { props.todo } </Typography>
			</Grid>
			<Grid item sm={ 1 }>
				<Button onClick={ () => dispatch( toggleTodo( props.todo ) ) }>&#10003;</Button>
			</Grid>
			<Grid item sm={ 1 }>
				<Button onClick={ () => dispatch( deleteTodo( props.todo ) ) }>&#10005;</Button>
			</Grid>
		</Grid>
	)
}

export default TodoItem