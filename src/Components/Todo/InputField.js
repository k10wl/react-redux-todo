import React, { useState } from "react";
import { Box, Button, Grid, Input } from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addTodo } from "../../redux/actions";
import myStyles from "../../MaterialUI/myStyles";
import InputFilter from "../inputFilter";

const InputField = (props) => {
  const { currentTasks } = props;
  const dispatch = useDispatch();
  const classes = myStyles();

  const [name, setName] = useState("");

  return (
    <Grid container>
      <Grid item sm={3} />
      <Grid className={classes.footer} sm={10} container item justify="center">
        <Grid item sm={10}>
          <Input
            fullWidth
            color="secondary"
            type="text"
            value={name}
            placeholder="Enter your task here"
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(keyDown) =>
              InputFilter(
                keyDown,
                currentTasks,
                name,
                setName,
                dispatch,
                addTodo
              )
            }
          />
        </Grid>
        <Grid item sm={1}>
          <Button
            color="secondary"
            variant="contained"
            onClick={(keyDown) =>
              InputFilter(
                keyDown,
                currentTasks,
                name,
                setName,
                dispatch,
                addTodo
              )
            }
          >
            Add task
          </Button>
        </Grid>
        <Box className={classes.footerBG}> </Box>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = function (state) {
  return {
    currentTasks: state.storage
      .find((task) => task.list === state.currentList)
      .taskStore.map((task) => task.task),
  };
};

export default connect(mapStateToProps)(InputField);

InputField.defaultProps = {
  currentTasks: [],
};

InputField.propTypes = {
  currentTasks: PropTypes.arrayOf(PropTypes.string),
};
