import React from "react";
import { deleteDocument } from "../firebase/FireStoreActions";
import { MusicContext } from "../contexts/MusicContext";

const deleteSong = (event) => {
  deleteDocument(event.target.parentElement.parentElement.id);
};

 export const MusicLibrary = () => {
   const [songs, setSong] = React.useContext(MusicContext);


   
  return (
    <>
      <div className="app-titles">
        <h2>Library</h2>
      </div>
      <div id="music-library">
        <div id="music-library-header">
          <div>Title</div>
          <div>Artist</div>
          <div>Genre</div>
          <div>Rating</div>
          <div></div>
        </div>
        <ul id="songs-list">
          {songs.map((song) => (
            <li className="song-row" id={song.id} key={song.id}>
              <div id="song-title">{song.song}</div>
              <div id="song-artist">{song.artist}</div>
              <div id="song-genre">{song.genre}</div>
              <div id="song-rating">{song.rating}</div>
              <div id="song-delete">
                <button id="song-delete-button" onClick={deleteSong}>
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}


