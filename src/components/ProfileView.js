import React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { animated, useTransition } from 'react-spring';
import { SocialIcon } from 'react-social-icons';
import {CustomType, CustomButton} from './CustomComponents';

const useStyles = makeStyles(theme => ({
    profileCard: {
        display: "none",
        position: "relative",
        flexDirection: "column",
        height: "auto",
        padding: theme.spacing(2),
        border: theme.darkMode.darkMode ? `1px solid ${theme.palette.primary.light}21` : "none",
        boxShadow: theme.darkMode.darkMode ? "none" : `-1px -3px 10px 1px ${theme.palette.secondary.light}21,
        1px 3px 10px 1px ${theme.palette.secondary.light}21`,
        borderRadius: "0.9em",
        minWidth:"100%", // mobile
        [theme.breakpoints.up("xs")]: {
            minWidth:"40%"
        },
        [theme.breakpoints.up("sm")]: {
            minWidth:"50%"
        },
        [theme.breakpoints.up("xl")]: {
            minWidth:"60%"
        },
    },
    profileDiv: {
        margin: theme.spacing(0.5),
        marginBottom: theme.spacing(5),
        display: "flex",
        justifyContent: "space-evenly",
    },
    profileAvatar: {
        height: "150px",
        width: "150px"
    },
    aboutSection: {
        margin: theme.spacing(0.5),
        marginBottom: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }
}));

const ProfileView = ({setnav, show, ...rest}) => {
    // material styles
    const classes = useStyles();
    const theme = useTheme();
    // anim transitions props
    const transitions = useTransition(show, {
        from: {
            display: "none",
            transform: "scale(0.2)",
        },
        enter: {
            delay: 500,
            display: "flex",
            transform: "scale(1)",
        },
        leave: {
            transform: "scale(0)",
        },
        expires: 2
    });
    // darkmode
    const darkMode = theme.darkMode.darkMode;
    // handle button clicks
    const handleClick = () => {
        setnav("projects");
    };

    return transitions(
        (styles, show) => show &&
            <animated.div className={classes.profileCard} style={styles} {...rest}>
                <div className={classes.profileDiv}>
                    <Avatar 
                    src="/android-chrome-512x512.png" 
                    alt="test"
                    className={classes.profileAvatar}
                    />
                </div>
                <div className={classes.aboutSection}>
                    <CustomType>My name is Mubarak Yahaya, I'm a programmer based in Nigeria.</CustomType>
                    <CustomType>I'm Passionate about web/software development and my current working stack is Python and Javascript</CustomType>
                    <CustomType>Check out some of my projects</CustomType>
                </div>
                <div className={classes.profileDiv}>
                    <CustomButton 
                        onClick={handleClick}
                    >
                        Projects
                    </CustomButton>
                </div>
                <div className={classes.profileDiv}>
                    <SocialIcon 
                    bgColor={darkMode ? theme.palette.primary.dark : "black"} 
                    url={"https://github.com/mubrik"}
                    title={"Github"}
                    />
                    <SocialIcon 
                    bgColor={darkMode ? theme.palette.primary.dark : "black"} 
                    url={"mailto:mubarakg4u@gmail.com"}
                    network={"email"}
                    title={"Email"}
                    />
                    <SocialIcon 
                    url={"https://t.me/mubrik1"}
                    network={"telegram"}
                    title={"Telegram"}
                    />
                    <SocialIcon
                    url={"https://www.linkedin.com/in/mubarak-yahaya-957917163"}
                    title={"LinkedIn"}
                    />
                </div>
            </animated.div>
        );
};

export default ProfileView;