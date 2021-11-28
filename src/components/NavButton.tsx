import * as React from 'react';
// material
import { styled } from '@mui/system';
import { Menu, MenuItem, Fade, IconButton } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
// drkmode
import { useDarkMode } from '../App';
// types
import {IHomePageState} from "./HomePage";

// styled
const StyledDiv = styled("div")(({theme}) => ({
  position: "relative",
  border: `1px solid ${theme.palette.type == "dark" ? theme.palette.secondary.main : theme.palette.primary.main}`,
  borderRadius: "18px",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(6)
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: theme.spacing(8)
  },
}));

interface INavProps {
  setNav: React.Dispatch<React.SetStateAction<IHomePageState>>;
}

const NavButton = ({setNav}:INavProps): JSX.Element => {
  // darkmode
  const {darkMode} = useDarkMode();
  // states
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement|HTMLElement|null>(null);
  const menuShow = Boolean(anchorEl);

  // handle click, mount element
  const handleMenuClick = (_event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(_event.currentTarget.parentElement);
  };
  // handle menu close
  const handleMenuItemClick = (param?: IHomePageState): void => {
    if (param) {
      setNav(param);
    }
    setAnchorEl(null);
  };

  return (
    <StyledDiv>
    <IconButton 
      aria-controls="fade-menu"
      aria-haspopup="true" 
      color={darkMode ? "secondary" : "primary"}
      onClick={(e) => handleMenuClick(e)}
    >
      <MenuOutlined/>
    </IconButton>
    <Menu
      open={menuShow}
      anchorEl={anchorEl}
      onClose={() => handleMenuItemClick()}
      id="faded-menu"
      TransitionComponent={Fade}
    >
      <MenuItem onClick={() => handleMenuItemClick("home")}> Home </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick("projects")}> Projects </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick("nowPlaying")}> Now Playing </MenuItem>
    </Menu>
    </StyledDiv>
  );
};

export default NavButton;