import React from 'react';
// material
import { styled } from '@mui/system';
import { Avatar, useTheme } from '@mui/material';
// animation
import { motion } from "framer-motion";
// social icons
import { SocialIcon } from 'react-social-icons';
// custom
import {CustomType, CustomBaseButton} from './CustomComponents';
import useBackgroundGradientColor from "./utils/useBackgroundGradientColor";
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
  // border: theme.palette.type === "dark" ? `1px solid ${theme.palette.secondary.light}52` : "1px solid #3b47dd40",
  // boxShadow: theme.palette.type === "dark"? "none" : `rgb(0 0 0 / 15%) 1px 1px 9px 1px`,
  borderRadius: "0.9em",
  backdropFilter: "blur(2px)",
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

  // darkmode
  const { darkMode } = useDarkMode();

  // animation colors for motion div
  const animateColors = useBackgroundGradientColor();
  
  // handle button clicks
  const handleClick = (param: IHomePageState): void => {
    setNav(param);
  };

  const animeButtonVariants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 1,
        type: "spring"
      }
    }
  };

  return(
    <>
      <motion.div
        // animate in div
        initial={{
          position: "absolute",
          top: "0%",
          left: "0%",
          scale: 0.3,
        }}
        animate={{
          top: "50%",
          left: "50%",
          scale: 1,
          translateX: "-50%",
          translateY: "-50%",
          transition: {
            duration: 0.6
          },
          transitionEnd: {
            display: 'flex',
            position: "relative",
            top: 0,
            left: 0,
            translateX: "0%",
            translateY: "0%"
          }
        }}
        exit={{
          translateX: "70%",
          translateY: "80%",
          scale: 0.2,
          transition: {
            duration: 0.3
          }
        }}
      >
        <motion.div
          // animate in background
          initial={{
            position: "absolute",
            right: 0,
            top: 0,
            boxShadow: "#0000002b 1px 1px 3px 1px",
          }}
          animate={{
            background: animateColors.bgColor,
            borderRadius: "0.9em",
            width: "94%",
            height: "94%",
            right: 5,
            top: 10,
            zIndex: -777,
            transition: {
              delay: 0.2,
              duration: 0.6,
              type: "tween"
            }
          }}
          exit={{
            background: "transparent",
            transition: {
              duration: 0.3
            }
          }}
        >
        </motion.div>
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
            <motion.div
              variants={animeButtonVariants}
              whileHover={"hover"}
            >
              <SocialIcon 
                bgColor={darkMode ? "black" : undefined} 
                url={"https://github.com/mubrik"}
                title={"Github"}
              />
            </motion.div>
            <motion.div
              variants={animeButtonVariants}
              whileHover={"hover"}
            >
              <SocialIcon 
                bgColor={darkMode ? "black" : undefined} 
                url={"mailto:mubarakg4u@gmail.com"}
                network={"email"}
                title={"Email"}
              />
            </motion.div>
            <motion.div
              variants={animeButtonVariants}
              whileHover={"hover"}
            >
              <SocialIcon
                bgColor={darkMode ? "black" : undefined}
                url={"https://t.me/mubrik1"}
                network={"telegram"}
                title={"Telegram"}
              />
            </motion.div>
            <motion.div
              variants={animeButtonVariants}
              whileHover={"hover"}
            >
              <SocialIcon
                bgColor={darkMode ? "black" : undefined} 
                url={"https://www.linkedin.com/in/mubarak-yahaya-957917163"}
                title={"LinkedIn"}
              />
            </motion.div>
          </StyledBtnSectionDiv>
        </StyledProfileCardDiv>
      </motion.div>
    </>
  );
};

export default ProfileView;