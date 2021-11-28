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
  borderRadius: "15px"
}));

interface INavProps {
  setNav: React.Dispatch<React.SetStateAction<IHomePageState>>;
}

const NavButton = ({setNav}:INavProps): JSX.Element => {
  // darkmode
  const {darkMode} = useDarkMode();
  // states
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement|null>(null);
  const menuShow = Boolean(anchorEl);

  // handle click, mount element
  const handleMenuClick = (_event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(_event.currentTarget);
  };
  // handle menu close
  const handleMenuItemClick = (str: string): void => {
    switch (str) {
      case "projects":
        setNav("projects");
        setAnchorEl(null);
        break;
      
      case "home":
        setNav("home");
        setAnchorEl(null);
        break;
      
      case "nowPlaying":
        setNav("nowPlaying");
        setAnchorEl(null);
        break;
  
      default:
        setAnchorEl(null);
        break;
    }
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
      onClose={handleMenuItemClick}
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


// const CustomFade = React.forwardRef((props, ref) => (<Fade {...props} ref={ref} />));
// CustomFade.displayName = "CustomFade";

// const CustomMenu = React.forwardRef((props, ref) => (<Menu {...props} ref={ref}/>));
// CustomMenu.displayName = "CustomMenu";

// const CustomMenuItem = React.forwardRef((props, ref) => (<MenuItem {...props} ref={ref}/>));
// CustomMenuItem.displayName = "CustomMenuItem";

export default NavButton;