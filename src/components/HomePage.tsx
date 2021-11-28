import * as React from 'react';
// styles
import { styled } from '@mui/system';
// components
import NavButton from "./NavButton";
import DarkModeSwitch from './DarkModeSwitch';
import ProjectListView from './ProjectListView';
import ProfileView from './ProfileView';
import NowPlaying from './NowPlaying';

// material styled
const StyledRootDiv = styled("div")(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  minHeight: "92vh",
  alignItems: "center",
  justifyContent: "start",
  padding: theme.spacing(0.8),
  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
  }
}));

const StyledNavAreaDiv = styled("nav")(({theme}) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1)
}));

const StyledBackgroundDiv = styled("div")(({theme}) => ({
  background: `linear-gradient(
    180deg,
    ${theme.palette.background.default} 65%,
    ${theme.palette.type === "dark" ? theme.palette.primary.main : theme.palette.secondary.main}6e 300%)`,
}));

// page state enum
export type IHomePageState = "home" | "projects" | "nowPlaying";

const Homepage = (): JSX.Element => {

  // page state
  const [pageState, setPageState] = React.useState<IHomePageState>("home");

  return(
    <StyledBackgroundDiv>
    <StyledNavAreaDiv>
      <NavButton setNav={setPageState}/>
      <DarkModeSwitch/>
    </StyledNavAreaDiv>
    <StyledRootDiv>
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
    </StyledRootDiv>
    </StyledBackgroundDiv>
  );
};

export default Homepage;