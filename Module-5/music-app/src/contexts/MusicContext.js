import React from "react";
import { database } from "../firebase/FireStoreActions";

// Create Context
export const MusicContext = React.createContext();

// Provider
export const MusicProvider = (props) => {
  const [songs, setSongs] = React.useState([]);

  const getData = async () => {
    const data = await database();
    setSongs(data);
  };

  getData();

  return (
    <MusicContext.Provider value={[songs, setSongs]}>
      {props.children}
    </MusicContext.Provider>
  );
};
