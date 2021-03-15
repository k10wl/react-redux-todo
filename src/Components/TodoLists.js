import React from "react";
import { Grid } from "@material-ui/core";
import myStyles from "../MaterialUI/myStyles";
import ListInputField from "./ListsInputField";
import ListOfLists from "./ListsOfLists";


const TodoLists = ( props ) => {

	const classes = myStyles()

	return (
		<Grid className={ classes.fixedLeft } item container sm={ 2 }>
			<Grid className={ classes.fixedLeft }>

				<Grid>
					<ListOfLists/>
				</Grid>

				<Grid>
					<ListInputField/>
				</Grid>

			</Grid>
		</Grid>
	)
}

export default TodoLists