import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Button, Grid, Input } from "@material-ui/core";
import PropTypes from "prop-types";
import { createList } from "../../redux/actions";
import myStyles from "../../MaterialUI/myStyles";
import InputFilter from "../inputFilter";

const InputField = (props) => {
  const { reduxListsForFilter } = props;
  const dispatch = useDispatch();
  const classes = myStyles();

  const [list, setList] = useState("");

  return (
    <Grid className={classes.lists} item container sm={11} justify="center">
      <Input
        type="text"
        fullWidth
        value={list}
        placeholder="Create new list"
        inputProps={{
          style: { textAlign: "center", backgroundColor: "rgb(128 138 197)" },
        }}
        onChange={(e) => setList(e.target.value)}
        onKeyDown={(keyDown) =>
          InputFilter(
            keyDown,
            reduxListsForFilter,
            list,
            setList,
            dispatch,
            createList
          )
        }
      />
      <Button
        color="secondary"
        variant="contained"
        onClick={(keyDown) =>
          InputFilter(
            keyDown,
            reduxListsForFilter,
            list,
            setList,
            dispatch,
            createList
          )
        }
      >
        Create new list
      </Button>
    </Grid>
  );
};

const mapStateToProps = function (state) {
  return {
    reduxListsForFilter: state.storage.map((l) => l.list),
  };
};

export default connect(mapStateToProps)(InputField);

InputField.defaultProps = {
  reduxListsForFilter: [],
};

InputField.propTypes = {
  reduxListsForFilter: PropTypes.arrayOf(PropTypes.string),
};
