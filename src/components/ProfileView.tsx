import * as React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { animated, useTransition } from 'react-spring';
import { SocialIcon } from 'react-social-icons';
import {CustomType, CustomButton} from './CustomComponents';
// dkmode
import { useDarkMode } from '../App';
//types
import {IHomePageState} from "./HomePage";

const useStyles = makeStyles(theme => ({
  profileCard: {
    display: "none",
    position: "relative",
    flexDirection: "column",
    height: "auto",
    padding: theme.spacing(2),
    border: theme.palette.type === "dark" ? `1px solid ${theme.palette.primary.light}21` : "none",
    boxShadow: theme.palette.type === "dark"? "none" : `7px 10px 14px 1px #0000000d,
    1px 3px 10px 1px #00000021`,
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
  projectBtnSection: {
    margin: theme.spacing(0.5),
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
  },
  profileAvatar: {
    height: "150px",
    width: "150px"
  },
  aboutSection: {
    margin: theme.spacing(0.5),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  margin: {
    margin: theme.spacing(0.5),
  }
}));

interface IProfileViewProps {
  setNav: React.Dispatch<React.SetStateAction<IHomePageState>>;
  show: boolean;
}

const ProfileView = ({setNav, show}: IProfileViewProps): JSX.Element => {
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
  const {darkMode} = useDarkMode();
  // handle button clicks
  const handleClick = (param: IHomePageState): void => {
    setNav(param);
  };

  return transitions(
    (styles, show) => show &&
    <animated.div className={classes.profileCard} style={styles}>
      <div className={classes.profileDiv}>
        <Avatar 
        src={darkMode ? "/react-homepage/avi2.png" : "/react-homepage/avi.png"} 
        alt="test"
        className={classes.profileAvatar}
        />
      </div>
      <div className={classes.aboutSection}>
        <CustomType>My name is Mubarak Yahaya, A programmer based in Nigeria.</CustomType>
        <CustomType>I love good music, coffee and tweaking :)</CustomType>
        <CustomType>My current development stack includes Python, javaScript(typeScript) and Linux</CustomType>
      </div>
      <div className={classes.projectBtnSection}>
        <CustomType className={classes.margin}>Check out some of my</CustomType>
        <CustomButton
          className={classes.margin}
          onClick={() => handleClick("projects")}
        >
          Projects
        </CustomButton>
      </div>
      <div className={classes.projectBtnSection}>
        <CustomType className={classes.margin}>What am i </CustomType>
        <CustomButton
          className={classes.margin}
          onClick={() => handleClick("nowPlaying")}
        >
          Listening
        </CustomButton>
        <CustomType className={classes.margin}>to?</CustomType>
      </div>
      <div className={classes.profileDiv} style={{marginTop: "15px"}}>
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