import React from "react";
import { Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { switchList } from "../redux/actions";
import { connect, useDispatch } from "react-redux";
import myStyles from "../MaterialUI/myStyles";

const ListsOfLists = ( props) => {
	const classes = myStyles()
	const dispatch = useDispatch()

	return (
		<Grid className={ `${ classes.spacingTop } ${ classes.spacingBottom } ${ classes.listsBox }` }>
			<List>
				{ props.storage.map( list =>
					<ListItem
						key={ list.list }
						className={ `${ classes.listItem } ${ list.checked ? classes.listItemChecked : null }` }
						onClick={ () => dispatch( switchList( list.list ) ) }
						button>
						<ListItemText primary={ list.list }/>
					</ListItem> )
				}
			</List>
		</Grid>
	)
}


const mapStateToProps = function ( state ) {
	return {
		storage: state.storage
	}
}

export default connect( mapStateToProps )( ListsOfLists )