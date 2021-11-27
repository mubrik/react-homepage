import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
// dk mode context
import {useDarkMode} from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    color:theme.palette.type === "dark" ? theme.palette.primary.main : theme.palette.secondary.main,
  },
  iconPosition: {
    margin: 0,
    position: "absolute",
    right: "20px",
    top: "12px",
    [theme.breakpoints.up("sm")]: {
        right: "50px",
        top: "50px"
    },
  }
}));

const DarkModeSwitch = (): JSX.Element => {
  // styles
  const classes = useStyles();
  // darkmode
  const {setDarkMode} = useDarkMode();

  return(
    <div className={classes.iconPosition}>
      <IconButton
        className={classes.root}
        onClick={() => setDarkMode(state => !state)}
      >
        <EmojiObjectsOutlinedIcon fontSize={"large"}/>
      </IconButton>
    </div>
  );
};

export default DarkModeSwitch;