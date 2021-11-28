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
// transitions
import { animated, useTransition } from 'react-spring';
// types
import {IHomePageState} from "./HomePage";
// drkmode
import { useDarkMode } from "../App";
// custom
import { CustomType } from "./CustomComponents";

const StyledProfileCardDiv = styled("div")(({theme}) => ({
  position: "relative",
  flexDirection: "column",
  height: "auto",
  maxHeight: "80vh",
  padding: theme.spacing(1.2),
  border: theme.palette.type === "dark" ? `1px solid ${theme.palette.primary.light}21` : "none",
  // boxShadow: theme.palette.type === "dark"? "none" : `7px 10px 14px 1px #0000000d,
  // 1px 3px 10px 1px #00000021`,
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
  gap: "10px",
  overflow: "auto",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 0.8fr",
    overflow: "hidden",
  },
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

const NowPlaying = ({pageState, show}: INowPlayingProps): JSX.Element => {

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

  // handlers
  const handleRefreshClick = ():void => {
    // refresh 
    setDataState("idle");
  };
 
  return transitions(
    (styles, show) => show &&
    <animated.div style={styles}>
    <StyledProfileCardDiv>
      <Stack sx={{ gap: 1, maxHeight: "97%", position:"relative" }}>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          <LoadingButton
            onClick={handleRefreshClick}
            loading={dataState === "loading" }
            variant="outlined"
            color={darkMode ? "secondary" : "primary"}
          >
            Refresh
          </LoadingButton>
        </Stack>
        <StyledResponsiveGrid>
          <Stack>
            { nowPlaying !== null &&
            <Card sx={{ display: 'flex', justifyContent: "center", maxHeight: "84%" }} raised>
              <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: "center", gap: 1}}>
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
          <Stack direction={"column"} spacing={{ xs: 1, sm: 2, md: 1 }}>
            {
              recentPlays &&
              recentPlays.map((track, index) => (
                <Card 
                  sx={{
                    display: 'flex',
                    maxHeight: "21vh", 
                    maxWidth: {
                      xs: "auto",
                      sm: "auto",
                      md: "420px"
                    },
                  }} 
                  key={index}
                  raised
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
    </animated.div>
  );
};

export default NowPlaying;