// component that fetches my playing tracks and shares via context
import React, { ReactNode, useEffect } from "react";
// utils
import createTypeContext from "./utils/contextUtil";
// types
import { IDataState, ITrackObj, ISongDetail, IPlaylist} from "./customTypes";

// create context
const [usePlaylist, PlaylistProvider] = createTypeContext<IPlaylist>("playlistContext");

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
  // ah, i'm dumb, i use last fm apis and forgot date isnt available until the track is scrobbled hence undefined varible causing error. smfh, facepalm
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

/**
 * interface for this component
 */
 interface IComponentProps {
  children?: ReactNode;
}

const NowPlayingContext = ({children}: IComponentProps): JSX.Element => {

  const [dataState, setDataState] = React.useState<IDataState>("idle");
  const [nowPlaying, setNowPlaying] = React.useState<ISongDetail|null>(null);
  const [recentPlays, setRecentPlays] = React.useState<ISongDetail[]|null>(null);

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
      const [_nowPlaying, ..._recentPlays] = reqObj.slice().map((track, index) => prepareData(track, index === 0 ? "nowPlaying" : "recent"));

      // set states
      setNowPlaying(_nowPlaying);
      setRecentPlays(_recentPlays);
      setDataState("loaded");
    } catch (error) {
      // install notisstack for notifications later/ crreat custom comp
      console.log(error);
      setNowPlaying(null);
      setRecentPlays(null);
      setDataState("error");
    }
    

  }, [dataState]);

  // effect for loading data
  useEffect(() => {
    if (dataState === "idle") {
      fetchMyTracks();
    }
  }, [dataState]);

  return(
    <PlaylistProvider
      value={{
        dataState: dataState,
        nowPlaying: nowPlaying,
        prevTracks: recentPlays,
        setDataState: setDataState
      }}
    >
      {children}
    </PlaylistProvider>
  );
};

// export
export default NowPlayingContext;
export {usePlaylist};