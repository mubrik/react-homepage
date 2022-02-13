import * as React from "react";
// material
import { styled } from "@mui/system";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack } from "@mui/material";
// icon
import LoadingButton from '@mui/lab/LoadingButton';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
// animation
import { motion } from "framer-motion";
// types
import {IHomePageState} from "./HomePage";
// drkmode
import { useDarkMode } from "../App";
// custom
import { CustomType, CustomBaseButton } from "./CustomComponents";
import useBackgroundGradientColor from "./utils/useBackgroundGradientColor";
import {usePlaylist} from "./NowPlayingContext";

const StyledProfileCardDiv = styled("div")(({theme}) => ({
  position: "relative",
  flexDirection: "column",
  height: "auto",
  // maxHeight: "88vh",
  padding: theme.spacing(1.2),
  // border: theme.palette.type === "dark" ? `1px solid ${theme.palette.primary.light}21` : "none",
  borderRadius: "0.9em",
  minWidth:"100%", // mobile,
  overflow: "hidden",
  [theme.breakpoints.up("xs")]: {
    minWidth:"50vw"
  },
  [theme.breakpoints.up("sm")]: {
    minWidth:"55vw"
  },
  [theme.breakpoints.up("lg")]: {
    minWidth:"58vw"
  },
}));

const StyledResponsiveGrid = styled("div")(({theme}) => ({
  display: "grid",
  gridTemplateRows: "auto",
  overflow: "auto",
  maxHeight: "70vh",
  padding: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 0.8fr",
    overflow: "hidden",
    gap: "10px",
    padding: theme.spacing(0.5),
    maxHeight: "75vh",
  },
}));

const StyledNavAreaDiv = styled("div")(({theme}) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1)
}));

interface INowPlayingProps {
  pageState: IHomePageState;
  setNav: React.Dispatch<React.SetStateAction<IHomePageState>>;
  show: boolean;
}

const NowPlaying = ({setNav, pageState, show}: INowPlayingProps): JSX.Element => {

  // darkmode 
  const {darkMode} = useDarkMode();
  // animation colors for motion div
  const animateColors = useBackgroundGradientColor();
  // tracks
  const {nowPlaying, prevTracks, dataState, setDataState} = usePlaylist();

  // handlers
  const handleRefreshClick = ():void => {
    // refresh 
    setDataState("idle");
  };
  
  const handleNavClick = (param: IHomePageState): void => {
    setNav(param);
  };

  return(
    <motion.div
      // animate in div
      initial={{
        position: "absolute",
        translateX: "-50%",
        translateY: "-50%",
        scale: 0.3,
      }}
      animate={{
        scale: 1,
        translateX: "0%",
        translateY: "0%",
        transition: {
          duration: 1,
          type: "spring"
        },
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
            width: "95%",
            height: "90%",
            right: 4,
            top: 60,
            zIndex: -777,
            transition: {
              delay: 0.2,
              duration: 0.8,
              type: "spring"
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
        <Stack sx={{ gap: 1, position:"relative" }}>
          <StyledNavAreaDiv>
            <CustomBaseButton
              size={"small"}
              onClick={() => handleNavClick("home")}
              sx={{
                marginLeft: (theme) =>  theme.spacing(1),
              }}
              startIcon={<HomeIcon/>}
            >
              Home
            </CustomBaseButton>
            <CustomBaseButton
              size={"small"}
              onClick={() => handleNavClick("projects")}
              sx={{
                marginLeft: (theme) =>  theme.spacing(1),
              }}
              startIcon={<ListIcon/>}
            >
              Projects
            </CustomBaseButton>
            <LoadingButton
              size={"small"}
              onClick={handleRefreshClick}
              loading={dataState === "loading" }
              variant="outlined"
              color={darkMode ? "secondary" : "primary"}
              sx={{
                marginRight: (theme) => theme.spacing(1)
              }}
            >
              Refresh
            </LoadingButton>
          </StyledNavAreaDiv>
          <StyledResponsiveGrid>
            <Stack direction={"row"}>
              { nowPlaying !== null &&
              <Card
                sx={{
                  display: 'flex',
                  justifyContent: "center", 
                  maxHeight: "84%",
                  boxShadow: "rgb(0 0 0 / 17%) 1px 1px 6px 0px",
                  border: "1px solid #0000002e",
                  borderRadius: "14px",
                  backgroundColor: "transparent"
                }} 
              >
                <Box sx={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  textAlign: "center", 
                  gap: 1,
                  paddingTop: "5px"
                }}
                >
                  <Typography 
                    component="div"
                    variant="h4"
                    color={darkMode ? "text.primary" : "text.secondary"}
                  >
                    Now Playing
                  </Typography>
                  <CardMedia
                    component="img"
                    image={
                      nowPlaying.image === "" ?
                      // load a placeholder
                      darkMode ? "https://media.giphy.com/media/jx8f8LrkhIOyAy6gcM/giphy.gif" :
                      "https://media.giphy.com/media/l46Ci4XuSbWL249fq/giphy.gif" :
                      nowPlaying.image
                    }
                    sx={{maxHeight: "60%"}}
                    alt="Live from space album cover"
                  />
                  <CardContent sx={{ flex: '1 1 auto' }}>
                    <Typography 
                      component="div"
                      variant="h5"
                      color={darkMode ? "text.primary" : "text.secondary"}
                    >
                      {nowPlaying.title}
                    </Typography>
                    <Typography 
                      variant="subtitle1"
                      color={darkMode ? "text.primary" : "text.secondary"}
                      component="div"
                    >
                      {nowPlaying.artist}
                    </Typography>
                    <Typography 
                      variant="subtitle1"
                      color={darkMode ? "text.primary" : "text.secondary"}
                      component="div"
                    >
                      {nowPlaying.date}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
              }
            </Stack>
            <Stack direction={"column"} spacing={{ xs: 1, sm: 2, md: 1 }} >
              {
                (prevTracks !== null) &&
                prevTracks.map((track, index) => (
                  <Card 
                    key={index}
                    sx={{
                      display: 'flex',
                      flex: "0 1 auto",
                      maxHeight: "21vh",
                      backgroundColor: "transparent",
                      backdropFilter: "blur(3px)",
                      boxShadow: "rgb(0 0 0 / 17%) 1px 1px 6px 0px",
                      border: "1px solid #0000002e",
                      borderRadius: "14px", 
                      maxWidth: {
                        xs: "auto",
                        sm: "340px",
                        md: "420px"
                      },
                    }} 
                  >
                    <CardContent sx={{ flex: '1 1 auto' }}>
                      <Typography 
                        component="div"
                        variant="h5"
                        color={darkMode ? "textPrimary" : "textSecondary"}
                        sx={{overflow: "hidden"}}
                      >
                        {track.title} 
                      </Typography>
                      <Typography 
                        variant="subtitle1"
                        color={darkMode ? "textPrimary" : "textSecondary"}
                        component="div"
                      >
                        {track.artist}
                      </Typography>
                      <Typography 
                        variant="subtitle1"
                        color={darkMode ? "textPrimary" : "textSecondary"}
                        component="div"
                      >
                        {track.date}
                      </Typography>
                    </CardContent>
                  </Card>
                ))
              }
              {
                (dataState === "error") && 
                <>
                  <p> Error getting my tracks, try again or send a message :)</p>
                </>
              }
            </Stack>
          </StyledResponsiveGrid>
        </Stack>
      </StyledProfileCardDiv>
    </motion.div>
  );
};

export default NowPlaying;