import React from 'react';
// material
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';
// dk mode context
import {useDarkMode} from "../App";
// icons
import { EmojiObjectsOutlined } from '@mui/icons-material';

const StyledDiv = styled("div")(({theme}) => ({
  margin: 0,
  position: "absolute",
  right: "20px",
  top: "12px",
  [theme.breakpoints.up("sm")]: {
    right: "50px",
    top: "50px"
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