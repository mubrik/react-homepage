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
  minHeight: "100vh",
  background: `linear-gradient(
    180deg,
    ${theme.palette.background.default} 65%,
    ${theme.palette.type === "dark" ? theme.palette.primary.main : theme.palette.secondary.main}6e 300%)`,
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0.8)
}));

// page state enum
export type IHomePageState = "home" | "projects" | "nowPlaying";

const Homepage = (): JSX.Element => {

  // page state
  const [pageState, setPageState] = React.useState<IHomePageState>("home");

  return(
    <>
    <StyledRootDiv>
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
    </StyledRootDiv>
    </>
  );
};

export default Homepage;