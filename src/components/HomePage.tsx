import React, {useMemo} from 'react';
// styles
import { styled, useTheme } from '@mui/system';

// components
import NavButton from "./NavButton";
import DarkModeSwitch from './DarkModeSwitch';
import ProjectListView from './ProjectListView';
import ProfileView from './ProfileView';
import NowPlaying from './NowPlaying';
// animation
import { AnimatePresence, motion } from "framer-motion";
// dkmode
import { useDarkMode } from '../App';

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

  // dkmode
  const {darkMode} = useDarkMode();
  const theme = useTheme();

  const animateColors = useMemo(() => {

    const _bgColor = theme.palette.background.default;
    const _gradientColor = darkMode ? theme.palette.primary.main : theme.palette.secondary.main;
    
    return {
      bgColor: `linear-gradient(180deg,${_bgColor} 65%,${_gradientColor}6e 300%)`,
      test: darkMode ? "linear-gradient(127deg, rgba(0, 0, 0, 0.81) 0%, rgba(0, 0, 0, 1) 100%)" : "linear-gradient(127deg, rgba(255, 255, 255, 0.8) 0%, rgba(241, 221, 236, 0.81) 100%)"
    };
  }, [darkMode]);

  return(
    <motion.div
      animate={{
        background: animateColors.test,
        position: "relative",
      }}
      transition={{
        duration: 0.8,
        type: "spring"
      }}
    >
    <StyledNavAreaDiv>
      <NavButton setNav={setPageState}/>
      <DarkModeSwitch/>
    </StyledNavAreaDiv>
    <StyledRootDiv>
      <AnimatePresence>
        {
          pageState === "home" &&
          <ProfileView 
            setNav={setPageState}
            key={"profileView"}
            show={!!(pageState === "home")}
          />
        }
        {
          pageState === "projects" &&
          <ProjectListView 
            setNav={setPageState}
            key={"projectview"}
            show={!!(pageState === "projects")}
          />
        }
        {
          pageState === "nowPlaying" &&
          <NowPlaying 
            setNav={setPageState}
            pageState={pageState}
            show={!!(pageState === "nowPlaying")}
            key={"nowPlaying"}
          />
        }
      </AnimatePresence>
    </StyledRootDiv>
    </motion.div>
  );
};

export default Homepage;