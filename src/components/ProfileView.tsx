import * as React from 'react';
// material
import { styled } from '@mui/system';
import { Avatar } from '@mui/material';
// animation
import { animated, useTransition } from 'react-spring';
// social icons
import { SocialIcon } from 'react-social-icons';
// custom
import {CustomType, CustomBaseButton} from './CustomComponents';
// dkmode
import { useDarkMode } from '../App';
//types
import {IHomePageState} from "./HomePage";

const StyledAboutDiv = styled("div")(({theme}) => ({
  margin: theme.spacing(0.5),
  marginBottom: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
}));

const StyledParagraphDiv = styled("div")(({theme}) => ({
  margin: theme.spacing(0.1),
  marginBottom: theme.spacing(1.5),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
}));

const StyledBtnSectionDiv = styled("div")(({theme}) => ({
  margin: theme.spacing(3),
  display: "flex",
  justifyContent: "space-evenly",
}));

const StyledProfileAviDiv = styled("div")(({theme}) => ({
  margin: theme.spacing(0.5),
  marginBottom: theme.spacing(3),
  display: "flex",
  justifyContent: "space-evenly",
}));

const StyledProfileCardDiv = styled("div")(({theme}) => ({
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
    minWidth:"50vw"
  },
  [theme.breakpoints.up("sm")]: {
    minWidth:"55vw"
  },
  [theme.breakpoints.up("xl")]: {
    minWidth:"58vw"
  },
}));

interface IProfileViewProps {
  setNav: React.Dispatch<React.SetStateAction<IHomePageState>>;
  show: boolean;
}

const ProfileView = ({setNav, show}: IProfileViewProps): JSX.Element => {

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
  const { darkMode } = useDarkMode();
  
  // handle button clicks
  const handleClick = (param: IHomePageState): void => {
    setNav(param);
  };

  return transitions(
    (styles, show) => show &&
    <animated.div style={styles}>
    <StyledProfileCardDiv>
      <StyledProfileAviDiv>
        <Avatar 
          src={darkMode ? "/react-homepage/avi2.png" : "/react-homepage/avi.png"} 
          alt="test"
          sx={{ width: 80, height: 80 }}
        />
      </StyledProfileAviDiv>
      <StyledAboutDiv>
        <CustomType>My name is Mubarak Yahaya, A developer based in Nigeria. </CustomType>
        <CustomType>I love good music, coffee and tweaking stuff :) </CustomType>
        <CustomType>My current development stack includes Python, javaScript( typeScript ) and Linux </CustomType>
      </StyledAboutDiv>
      <StyledParagraphDiv>
        <CustomType>Check out some of my</CustomType>
        <CustomBaseButton
          variant={"contained"}
          sx={{marginLeft:(theme) => theme.spacing(1)}}
          onClick={() => handleClick("projects")}
        >
          Projects
        </CustomBaseButton>
      </StyledParagraphDiv>
      <StyledParagraphDiv>
        <CustomType>What am i </CustomType>
        <CustomBaseButton
          variant={"contained"}
          sx={{marginLeft:(theme) => theme.spacing(1), marginRight:(theme) => theme.spacing(1)}}
          onClick={() => handleClick("nowPlaying")}
        >
          Listening
        </CustomBaseButton>
        <CustomType>to?</CustomType>
      </StyledParagraphDiv>
      <StyledBtnSectionDiv>
        <SocialIcon 
          bgColor={darkMode ? "#c95100" : "black"} 
          url={"https://github.com/mubrik"}
          title={"Github"}
        />
        <SocialIcon 
          bgColor={darkMode ? "#c95100" : "black"} 
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
      </StyledBtnSectionDiv>
      </StyledProfileCardDiv>
    </animated.div>
  );
};

export default ProfileView;