import React from "react";
import { DropDown } from "./DropDown";
import { addDocument } from "../firebase/FireStoreActions";

export default function SongInput() {
  const [state, setState] = React.useState({
    song: "",
    artist: "",
    genre: "",
    rating: "",
  });

  const handleChange = (event) => {
    console.log(DropDown);
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const addNewSong = () => {
    addDocument(state);
  };

  return (
    <>
      <div className="app-titles">
        <h2>Add a Song</h2>
      </div>
      <form id="form-song-input">
        <div>
          <input
            id="form-song-input-title"
            type="text"
            name="song"
            placeholder="song"
            value={state.song}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            id="form-song-input-artist"
            type="text"
            name="artist"
            placeholder="artist"
            value={state.artist}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            id="form-song-input-genre"
            type="text"
            name="genre"
            placeholder="genre"
            value={state.genre}
            onChange={handleChange}
          />
        </div>

        <div>
          <DropDown
            id="DropDown-Rating"
            name="rating"
            value={state.rating}
            onChange={handleChange}
          />
        </div>

        <div>
          <button id="btn-add-song" onClick={addNewSong}>
            Add song
          </button>
        </div>
      </form>
    </>
  );
}
