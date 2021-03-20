import React from "react";
import { Grid } from "@material-ui/core";
import myStyles from "../../MaterialUI/myStyles";
import ListInputField from "./InputField";
import ListOfLists from "./ListsOfLists";

const ListBlock = () => {
  const classes = myStyles();

  return (
    <Grid className={classes.fixedLeft} item container sm={2}>
      <Grid className={classes.fixedLeft}>
        <Grid>
          <ListOfLists />
        </Grid>

        <Grid>
          <ListInputField />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListBlock;
