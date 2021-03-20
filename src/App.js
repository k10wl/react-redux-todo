import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Components/Header";
import ListBlock from "./Components/List";
import TodoBlock from "./Components/Todo";

const App = () => {
  return (
    <Grid container direction="row">
      <Grid container>
        <Header />
      </Grid>

      <Grid item container direction="column" sm={2}>
        <ListBlock />
      </Grid>

      <Grid item container direction="column" sm={10} xs="auto">
        <TodoBlock />
      </Grid>
    </Grid>
  );
};

export default App;
