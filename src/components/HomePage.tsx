import * as React from 'react';
// styles
import { makeStyles } from "@material-ui/core/styles";
// components
import NavButton from "./NavButton";
import DarkModeSwitch from './DarkModeSwitch';
import ProjectListView from './ProjectListView';
import ProfileView from './ProfileView';
import NowPlaying from './NowPlaying';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    minHeight: "100vh",
    background: `linear-gradient(
      180deg,
      ${theme.palette.background.default} 65%,
      ${theme.palette.type === "dark" ? theme.palette.primary.main : theme.palette.secondary.main}6e 300%)`,
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0.8)
  },
}));

export type IHomePageState = "home" | "projects" | "nowPlaying";

const Homepage = (): JSX.Element => {

  // material styles
  const classes = useStyles();
  // page state
  const [pageState, setPageState] = React.useState<IHomePageState>("home");

  return(
    <>
    <div className={classes.root}>
      <NavButton setNav={setPageState}/>
      <DarkModeSwitch/>
      {
        pageState === "home" &&
        <ProfileView 
          setNav={setPageState}
          show={!!(pageState === "home")}
        />
      }
      {
        pageState === "projects" &&
        <ProjectListView 
          setNav={setPageState}
          show={!!(pageState === "projects")}
        />
      }
      {
        pageState === "nowPlaying" &&
        <NowPlaying 
          setNav={setPageState}
          pageState={pageState}
          show={!!(pageState === "nowPlaying")}
        />
      }
    </div>
    </>
  );
};

export default Homepage;