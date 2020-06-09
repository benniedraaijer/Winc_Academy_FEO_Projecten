import React from "react";
import { database, deleteDocument } from "../firebase/FireStoreActions";

const deleteSong = (event) => {
  deleteDocument(event.target.parentElement.parentElement.id);
};

export default function MusicLibrary() {
  const [songs, setSongs] = React.useState([]);

  React.useEffect(() => {
    const allSongs = [];
    const fetchData = async () => {
      const data = await database.collection("fav-songs").orderBy("song").get();

      setSongs(data.docs.map((doc) => doc.data()));
      data.forEach((item) => {
        allSongs.push({
          artist: item.data().artist,
          song: item.data().song,
          genre: item.data().genre,
          rating: item.data().rating,
          id: item.id,
        });
      });

      setSongs(allSongs);
    };

    fetchData();
  }, []);

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
