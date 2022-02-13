import React from "react"

// last fm data fetching state
export type IDataState = "idle"| "loaded" | "loading" | "error"

// last fm data types
export interface ITrackObj {
  artist: {mbid: string; "#text": string;};
  date: {uts: string; "#text": string;}
  image: ITrackImageObj[]
  name: string;
  url: string;
}

export interface ITrackImageObj {
  size: string;
  "#text": string;
}

export interface ISongDetail {
  artist: string;
  title: string;
  image: string;
  date: string;
  timeMs: string;
}

/**
* interface for context object
*/
 export interface IPlaylist {
  dataState: IDataState;
  nowPlaying: ISongDetail | null;
  prevTracks: ISongDetail[] | null;
  setDataState: React.Dispatch<React.SetStateAction<IDataState>>;
}