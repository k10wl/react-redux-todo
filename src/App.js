import React from "react";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import InputField from "./Components/InputField";
import TodoLists from "./Components/TodoLists";

const App = () => {

	const taskStorage = useSelector( state => state.storage )

	// Here 

	return (
		<Grid container direction="row">
			<Grid container>
				<Header/>
			</Grid>
			<Grid item container direction='column' sm={ 2 }>
				<TodoLists/>
			</Grid>
			<Grid item container direction='column' sm={ 10 } xs={ "auto" }>
				{ taskStorage.map( todo => <TodoItem key={ todo.task } todo={ todo.task } completed={ todo.completed }/> ) }
				<Grid>
					<InputField/>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default App;
