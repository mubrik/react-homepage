import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import NavButton from "./NavButton";
import DarkModeSwitch from './DarkModeSwitch';
import ProjectListView from './ProjectListView';
import ProfileView from './ProfileView';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minHeight: "100vh",
        background: `linear-gradient(
            180deg,
            ${theme.palette.background.default} 65%,
            ${theme.darkMode.darkMode ? theme.palette.primary.main : theme.palette.secondary.main}6e 300%)`,
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(0.8)
    },
}));

const Homepage = () => {

    // material styles
    const classes = useStyles();
    // page state
    const [pageState, setPageState] = React.useState("home");

    return(
        <>
        <div className={classes.root}>
            <NavButton setnav={setPageState}/>
            <DarkModeSwitch/>
            
                <ProfileView 
                    setnav={setPageState}
                    show={!!(pageState === "home")}
                />
                <ProjectListView 
                    setnav={setPageState}
                    show={!!(pageState === "projects")}
                />
            
        </div>
        </>
    );
};

export default Homepage;