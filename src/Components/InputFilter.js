function InputFilter( keyPressed, reduxState, reactState, updateState, dispatch, action ) {

	const reduxStateNoSpace = reduxState.map( removeSpace => removeSpace.replace( / /g, '' ).toLowerCase() )
	const reactStateNoSpace = reactState.replace( / /g, '' ).toLowerCase()

	const textFilter = (
		reduxStateNoSpace.indexOf( reactStateNoSpace ) === -1 &&
		reactState.length !== 0 &&
		( reactState.match( / /g ) || [] ).length !== reactState.length
	)

	const inputFilter = ( keyPressed.keyCode === 13 || keyPressed.type === 'click' )

	const emptyInputFieldAfterDispatch = () => updateState( '' )

	if ( textFilter && inputFilter ) dispatch( action( reactState ) ) && emptyInputFieldAfterDispatch()
	if ( !textFilter && inputFilter ) alert( 'you already have this one declared' )

}

export default InputFilter