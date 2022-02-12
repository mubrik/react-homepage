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

const StyledProfileCardDiv = styled("div")(({theme}) => ({
  position: "relative",
  flexDirection: "column",
  height: "auto",
  maxHeight: "80vh",
  padding: theme.spacing(1.2),
  border: theme.palette.type === "dark" ? `1px solid ${theme.palette.primary.light}21` : "none",
  borderRadius: "0.9em",
  minWidth:"100%", // mobile
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
  gridTemplateRows: " auto",
  overflow: "auto",
  padding: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 0.8fr",
    overflow: "hidden",
    gap: "10px",
    padding: theme.spacing(0.5),
  },
}));

const StyledNavAreaDiv = styled("div")(({theme}) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1)
}));

type IDataState = "idle"| "loaded" | "loading"

interface INowPlayingProps {
  pageState: IHomePageState;
  setNav: React.Dispatch<React.SetStateAction<IHomePageState>>;
  show: boolean;
}

interface ITrackObj {
  artist: {mbid: string; "#text": string;};
  date: {uts: string; "#text": string;}
  image: ITrackImageObj[]
  name: string;
  url: string;
}

interface ITrackImageObj {
  size: string;
  "#text": string;
}

interface ISongDetail {
  artist: string;
  title: string;
  image: string;
  date: string;
  timeMs: string;
}

// making this as for some reason react spring kept bugging while using "#text" from lastfm
const prepareData = (param: ITrackObj, type?: string):ISongDetail => {

  // copy
  const newData = {...param};
  // initial data
  const _stateData: ISongDetail = {
    artist: "",
    title: "",
    image: "",
    date: "",
    timeMs: ""
  };

  // mutate.. apparently bug might be from last fm? 
  // ah, i'm dumb, i use last fm apis and forgot date isnt available until the track is scrobbled. smfh, facepalm
  // for now playing track, the details are available but date isnt, which could cause the object key being absent
  // already made the function, so amma just leave it here
  _stateData.artist = newData?.artist?.["#text"] ? newData.artist["#text"] : "placeholder";
  _stateData.date = newData?.date?.["#text"] ? newData.date["#text"] : "";
  _stateData.timeMs = newData?.date?.["uts"] ? newData.date["uts"] : "placeholder";
  _stateData.title = newData?.name ? newData.name  : "placeholder";
  // array index 2 has large sinze image link
  _stateData.image = newData?.image[2]["#text"] ? newData.image[2]["#text"] : "";
  if (type === "nowPlaying") {
    // could be recent track, get time if available
    const _playtime = newData?.date?.uts ? newData.date.uts : null;

    if (_playtime) {
      // work on later
      const currTime = new Date();
    }

  }
  // return data
  return _stateData;
};

const NowPlaying = ({setNav, pageState, show}: INowPlayingProps): JSX.Element => {

  // states
  const [nowPlaying, setNowPlaying] = React.useState<ISongDetail|null>(null);
  const [recentPlays, setRecentPlays] = React.useState<ISongDetail[]|null>(null);
  const [dataState, setDataState] = React.useState<IDataState|null>("idle");

  // darkmode 
  const {darkMode} = useDarkMode();

  // use callback
  const fetchMyTracks = React.useCallback( async () => {
    // loading
    setDataState("loading");

    try {
      const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mubrik&api_key=ae2c676a4406b4a3afdbe1f31413b72c&format=json&limit=4`
      );
      const result = await response.json();
  
      const reqObj: ITrackObj[] = [...result["recenttracks"]["track"]];
      const _nowPlaying = prepareData(reqObj.slice(0, 1)[0], "nowPlaying");
      const _recentPlays = reqObj.slice(1).map((track) => prepareData(track, "recent"));

      // set states
      setNowPlaying(_nowPlaying);
      setRecentPlays(_recentPlays);
    } catch (error) {
      // install notisstack for notifications later/ crreat custom comp
      console.log(error);
      setNowPlaying(null);
      setRecentPlays(null);
    }
    setDataState("loaded");

  }, [dataState]);
 
  // effect for loading data
  React.useEffect(() => {
    if (pageState === "nowPlaying" && dataState === "idle") {
      fetchMyTracks();
    }
  }, [pageState, dataState]);

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
        display: 'flex',
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
        transitionEnd: {
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
      transition={{
        duration: 1,
        type: "spring",
        when: "beforeChildren"
      }}
    >
      <StyledProfileCardDiv>
        <Stack sx={{ gap: 1, maxHeight: "97%", position:"relative" }}>
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
            <Stack>
              { nowPlaying !== null &&
              <Card
                sx={{
                  display: 'flex',
                  justifyContent: "center", 
                  maxHeight: "84%",
                  boxShadow: "rgb(0 0 0 / 17%) 1px 1px 6px 0px",
                  border: "1px solid #0000002e",
                  borderRadius: "14px"
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
                recentPlays &&
                recentPlays.map((track, index) => (
                  <Card 
                    key={index}
                    sx={{
                      display: 'flex',
                      maxHeight: "21vh",
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
            </Stack>
          </StyledResponsiveGrid>
          <Stack direction={"row"} justifyContent={"flex-end"}>
            <CustomType 
              variant="subtitle1"
            >
              Powered by LastFm
            </CustomType>
          </Stack>
        </Stack>
      </StyledProfileCardDiv>
    </motion.div>
  );
};

export default NowPlaying;