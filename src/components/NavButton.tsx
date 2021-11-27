import * as React from 'react';
import {IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core/styles";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
// drkmode
import { useDarkMode } from '../App';
// types
import {IHomePageState} from "./HomePage";

const useStyles = makeStyles(theme => ({
  NavButton: {
    position: "absolute",
    border: `1px solid ${theme.palette.type == "dark" ? theme.palette.primary.main : theme.palette.secondary.main}`,
    left: "20px",
    top: "15px",
    [theme.breakpoints.up("sm")]: {
      left: "50px",
      top: "50px"
    },
  },
}));

interface INavProps {
  setNav: React.Dispatch<React.SetStateAction<IHomePageState>>;
}

const NavButton = ({setNav}:INavProps): JSX.Element => {
  // material 
  const classes = useStyles();
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

  // const menuProps = {
  //   anchorEl,
  //   open,
  //   onClose: handleClose,
  //   id: "faded-menu",
  //   TransitionComponent: Fade
  // };

  return (
    <>
    <IconButton 
      aria-controls="fade-menu"
      aria-haspopup="true" 
      className={classes.NavButton}
      onClick={(e) => handleMenuClick(e)}
    >
      <MenuIcon color={darkMode ? "primary" : "secondary"} />
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
    </>
  );
};


// const CustomFade = React.forwardRef((props, ref) => (<Fade {...props} ref={ref} />));
// CustomFade.displayName = "CustomFade";

// const CustomMenu = React.forwardRef((props, ref) => (<Menu {...props} ref={ref}/>));
// CustomMenu.displayName = "CustomMenu";

// const CustomMenuItem = React.forwardRef((props, ref) => (<MenuItem {...props} ref={ref}/>));
// CustomMenuItem.displayName = "CustomMenuItem";

export default NavButton;