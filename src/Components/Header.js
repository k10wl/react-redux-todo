import React from "react";
import { useDispatch } from "react-redux";
import { AppBar, Box, Button, Grid, Typography } from "@material-ui/core";
import { deleteAll, deleteDone } from "../redux/actions";
import myStyles from "../MaterialUI/myStyles";

const Header = () => {
  const dispatch = useDispatch();
  const classes = myStyles();

  return (
    <Grid>
      <AppBar position="fixed">
        <Grid container>
          <Grid item sm={1} />

          <Grid
            container
            item
            sm={10}
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h3">ToDo App</Typography>
            <Grid>
              <Button color="inherit" onClick={() => dispatch(deleteDone())}>
                Remove completed tasks
              </Button>
              <Button color="inherit" onClick={() => dispatch(deleteAll())}>
                Remove all tasks
              </Button>
            </Grid>
          </Grid>

          <Grid item sm={1} />
        </Grid>
      </AppBar>
      <Box className={classes.spacingTop} />
    </Grid>
  );
};

export default Header;
