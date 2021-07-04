import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        color:theme.darkMode.darkMode ? theme.palette.primary.main : theme.palette.secondary.main,
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

const DarkModeSwitch = () => {

    const theme = useTheme();
    const classes = useStyles()

    return(
        <div className={classes.iconPosition}>
            <IconButton
                className={classes.root}
                onClick={() => theme.darkMode.setDarkMode(state => !state)}
            >
                <EmojiObjectsOutlinedIcon fontSize={"large"}/>
            </IconButton>
        </div>
    )
}

export default DarkModeSwitch;