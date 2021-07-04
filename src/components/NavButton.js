import React from 'react';
import {IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    NavButton: {
        position: "absolute",
        border: `1px solid ${theme.darkMode.darkMode ? theme.palette.primary.main : theme.palette.secondary.main}`,
        left: "20px",
        top: "15px",
        [theme.breakpoints.up("sm")]: {
            left: "50px",
            top: "50px"
        },
    },
}))

const NavButton = ({setnav}) => {
    // material 
    const classes = useStyles();
    const theme = useTheme();
    // darkmode
    const darkMode = theme.darkMode.darkMode;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // handle menu clicks
    const handleClose = (str) => {
        switch (str) {
            case "projects":
                setnav("projects");
                setAnchorEl(null);
                break;
            
            case "home":
                setnav("home");
                setAnchorEl(null);
                break;
        
            default:
                setAnchorEl(null);
                break;
        }
    };

    return (
        <>
        <IconButton 
            aria-controls="fade-menu" 
            aria-haspopup="true" 
            className={classes.NavButton}
            onClick={(e) => handleClick(e)}
        >
            <MenuIcon color={darkMode ? "primary" : "secondary"} />
        </IconButton>
        <Menu
            id="fade-menu"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem onClick={() => handleClose("home")}>Home</MenuItem>
            <MenuItem onClick={() => handleClose("projects")}>Projects</MenuItem>
        </Menu>
        </>
    );
};

export default NavButton;