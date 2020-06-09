import React from "react";
import "./css/App.css";
import MusicLibrary from "./components/MusicLibrary";
import SongInput from "./components/SongInput";
import MusicGenres from "./components/MusicGenres.js";

export default function App() {
  return (
    <>
      <SongInput />
       <MusicGenres /> 
      <MusicLibrary />
    </>
  );
}
