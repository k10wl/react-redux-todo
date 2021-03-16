import React from "react";
import { Grid, IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import { switchList, switchListAndDeleteList } from "../redux/actions";
import { connect, useDispatch } from "react-redux";
import myStyles from "../MaterialUI/myStyles";
import DeleteIcon from '@material-ui/icons/Delete';

const ListsOfLists = ( props ) => {
	const classes = myStyles()
	const dispatch = useDispatch()

	return (
		<Grid className={ `${ classes.spacingTop } ${ classes.spacingBottom } ${ classes.listsBox }` }>
			<List>
				{/*
							Decided to hardcode default list
				*/}
				<ListItem
					className={ `${ classes.listItem } ${ props.defaultList.checked && classes.listItemChecked }` }
					onClick={ () => dispatch( switchList( props.defaultList.list ) ) }
					button>
					<ListItemText primary={ 'Default' }/>
				</ListItem>

				{ props.storage.map( listItem =>
					<Grid key={ listItem.list } className={ classes.listItemBox } container justify={ "center" }>
						<ListItem
							className={ `${ classes.listItem } ${ listItem.checked && classes.listItemChecked }` }
							onClick={ () => dispatch( switchList( listItem.list ) ) }
							button>
							<ListItemText primary={ listItem.list }/>
						</ListItem>

						{ listItem.checked &&
						<IconButton className={ classes.listDelete }
												onClick={ () => dispatch( switchListAndDeleteList( listItem.list ) ) }
												aria-label="delete">
							<DeleteIcon style={ { color: '#ffffff80' } }/>
						</IconButton> }
					</Grid>
				) }
			</List>
		</Grid>
	)
}

const mapStateToProps = function ( state ) {
	return {
		storage: state.storage.slice( 1 ),
		defaultList: state.storage[ 0 ]
	}
}

export default connect( mapStateToProps )( ListsOfLists )