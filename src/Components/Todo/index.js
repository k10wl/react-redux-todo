import React from "react";
import { Grid } from "@material-ui/core";
import InputField from "./InputField";
import TodoItem from "./TodoItem";

const TodoBlock = () => {
  return (
    <Grid>
      <InputField />
      <TodoItem />
    </Grid>
  );
};

export default TodoBlock;
