import React from "react";
import { DropDown } from "./DropDown";
import { addDocument } from "../firebase/FireStoreActions";
import { MusicContext } from "../contexts/MusicContext";

export default function SongInput() {
  const [inputState, setState] = React.useState({
    song: "",
    artist: "",
    genre: "",
    rating: "",
  });

  const [songs, setSongs] = React.useContext(MusicContext);

  const handleChange = event => {
    const value = event.target.value;
    setState({ ...inputState, [event.target.name]: value });
  };

  const addNewSong = event => {
    event.preventDefault();
    setSongs(currentSongs => [...currentSongs, inputState]);
    addDocument(inputState);
  };

  return (
    <>
      <div className='app-titles'>
        <h2>Add a Song</h2>
      </div>
      <form id='form-song-input' onSubmit={addNewSong}>
        <div>
          <input
            id='form-song-input-title'
            type='text'
            name='song'
            placeholder='song'
            value={inputState.song}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            id='form-song-input-artist'
            type='text'
            name='artist'
            placeholder='artist'
            value={inputState.artist}
            onChange={handleChange}
            onKeyPress={handleChange}
          />
        </div>

        <div>
          <input
            id='form-song-input-genre'
            type='text'
            name='genre'
            placeholder='genre'
            value={inputState.genre}
            onChange={handleChange}
            onKeyPress={handleChange}
          />
        </div>

        <div>
          <DropDown
            id='DropDown-Rating'
            name='rating'
            value={inputState.rating}
            onChange={handleChange}
            onKeyPress={handleChange}
          />
        </div>

        <div>
          <button id='btn-add-song' /*onClick={addNewSong}*/>Add song</button>
        </div>
      </form>
    </>
  );
}
