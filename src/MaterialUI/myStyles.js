import { makeStyles } from "@material-ui/core";

const myStyles = makeStyles({

	//Used in TodoItem to separate items from each other
	itemsSeparation: {
		borderBottom: '1px solid lightgrey',
		padding: '5px 0'
	},

	//Used in TodoItem to mark completed item
	completedTask: {
		textDecorationLine: 'line-through',
		color: 'grey'
	},

	//Used in Header to make some space between heading and todolist
	spacingTop: {
		paddingTop: '4rem'
	},

	//Used to place TodoLists on left side
	fixedLeft: {
		position: "fixed",
		left: '0',
		top: '0',
		width: ' 16.666667%;',
		height: '100%'
	},

	//Used in InputField to position input field on bottom
	footer: {
		position: 'fixed',
		bottom: 'calc(0% + 15px)'
	},

	//Used in InputField to create background for input field
	footerBG: {
		width: '100%',
		height: '200%',
		backgroundColor: 'white',
		position: 'absolute',
		zIndex: '-1',
		bottom: 'calc(0% - 15px)',
		borderTop: '1px solid #1976d2'
	},
})

export default myStyles