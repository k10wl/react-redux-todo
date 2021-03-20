function InputFilter(
  keyPressed,
  reduxState,
  reactState,
  updateState,
  dispatch,
  action
) {
  const ENTER_KEY_CODE = 13;
  const reduxStateNoSpace = reduxState.map((removeSpace) =>
    removeSpace.replace(/ /g, "").toLowerCase()
  );
  const reactStateNoSpace = reactState.replace(/ /g, "").toLowerCase();

  const textFilter =
    reduxStateNoSpace.indexOf(reactStateNoSpace) === -1 &&
    reactState.length !== 0 &&
    (reactState.match(/ /g) || []).length !== reactState.length;

  const inputFilter =
    keyPressed.keyCode === ENTER_KEY_CODE || keyPressed.type === "click";

  const emptyInputFieldAfterDispatch = () => updateState("");

  const startFiltering = () =>
    dispatch(action(reactState)) && emptyInputFieldAfterDispatch();

  if (textFilter && inputFilter) startFiltering();
  // if (!textFilter && inputFilter) alert("you already have this one declared");
}

export default InputFilter;
