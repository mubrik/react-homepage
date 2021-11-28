import * as React from 'react';
// material
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';
// dk mode context
import {useDarkMode} from "../App";
// icons
import { EmojiObjectsOutlined } from '@mui/icons-material';

const StyledDiv = styled("div")(({theme}) => ({
  position: "relative",
  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(6)
  },[theme.breakpoints.up("lg")]: {
    marginRight: theme.spacing(8)
  },
}));

const DarkModeSwitch = (): JSX.Element => {
  // darkmode
  const {darkMode, setDarkMode} = useDarkMode();

  return(
    <StyledDiv>
      <IconButton
        color={darkMode ? "secondary" : "primary"}
        onClick={() => setDarkMode(state => !state)}
      >
        <EmojiObjectsOutlined fontSize={"large"}/>
      </IconButton>
    </StyledDiv>
  );
};

export default DarkModeSwitch;