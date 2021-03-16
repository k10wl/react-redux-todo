import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { createList } from "../redux/actions";
import { Button, Grid, Input } from "@material-ui/core";
import myStyles from "../MaterialUI/myStyles";
import InputFilter from "./InputFilter";

const ListsInputField = ( props ) => {

	const dispatch = useDispatch();
	const classes = myStyles()

	let [ list, setList ] = useState( '' )

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
						 onKeyDown={ ( keyDown ) => InputFilter( keyDown, props.reduxListsForFilter, list, setList, dispatch, createList ) }/>
			<Button
				color='secondary'
				variant='contained'
				onClick={ ( keyDown ) => InputFilter( keyDown, props.reduxListsForFilter, list, setList, dispatch, createList ) }
			> Create new list </Button>
		</Grid>
	)
}

const mapStateToProps = function ( state ) {
	return {
		reduxListsForFilter: state.storage.map( l => l.list )
	}
}

export default connect( mapStateToProps )( ListsInputField )