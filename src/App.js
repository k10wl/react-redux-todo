import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import InputField from "./Components/InputField";
import TodoLists from "./Components/TodoLists";

const App = () => {


	return (
		<Grid container direction="row">

			<Grid container>
				<Header/>
			</Grid>

			<Grid item container direction='column' sm={ 2 }>
				<TodoLists/>
			</Grid>

			<Grid item container direction='column' sm={ 10 } xs={ "auto" }>
				<TodoItem/>
				<InputField/>
			</Grid>

		</Grid>
	);
}


export default App