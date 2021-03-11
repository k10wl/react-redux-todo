import React from "react";
import { Box, Grid } from "@material-ui/core";
import myStyles from "../MaterialUI/myStyles";

// To be added
//
// Here i'm planning to give user an option to create separated lists and let user name them. Each list will store
// his tasks. User will be able to switch between lists
//
// ( i have 0 ideas how im going to implement this yet :D )

const TodoLists = () => {

	const classes = myStyles()

	return (
		<Grid item container sm={ 2 }>
			<Box className={ classes.fixedLeft } component='div' bgcolor='primary.main'> </Box>
		</Grid>
	)
}

export default TodoLists