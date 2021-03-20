import React from "react";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import { switchList, switchListAndDeleteList } from "../../redux/actions";
import myStyles from "../../MaterialUI/myStyles";

const ListsOfLists = (props) => {
  const { state } = props;
  const defaultList = state.storage[0];
  const store = state.storage.slice(1);
  const classes = myStyles();
  const dispatch = useDispatch();

  return (
    <Grid
      className={`${classes.spacingTop} ${classes.spacingBottom} ${classes.listsBox}`}
    >
      <List>
        <ListItem
          className={`${classes.listItem} ${
            defaultList.checked && classes.listItemChecked
          }`}
          onClick={() => dispatch(switchList(defaultList.list))}
          button
        >
          <ListItemText primary="Default" />
        </ListItem>

        {store.map((listItem) => (
          <Grid
            key={listItem.list}
            className={classes.listItemBox}
            container
            justify="center"
          >
            <ListItem
              className={`${classes.listItem} ${
                listItem.checked && classes.listItemChecked
              }`}
              onClick={() => dispatch(switchList(listItem.list))}
              button
            >
              <ListItemText primary={listItem.list} />
            </ListItem>

            {listItem.checked && (
              <IconButton
                className={classes.listDelete}
                onClick={() => dispatch(switchListAndDeleteList(listItem.list))}
                aria-label="delete"
              >
                <DeleteIcon style={{ color: "#ffffff80" }} />
              </IconButton>
            )}
          </Grid>
        ))}
      </List>
    </Grid>
  );
};

// В мене тут великий стор, як його краще валідувати?

const mapStateToProps = function (state) {
  return {
    state,
  };
};

export default connect(mapStateToProps)(ListsOfLists);

ListsOfLists.propTypes = {
  state: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  ).isRequired,
};
