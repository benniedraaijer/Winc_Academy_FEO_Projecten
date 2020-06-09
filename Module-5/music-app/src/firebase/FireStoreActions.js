import firebase from "../firebase/config/FireBaseConfig";
import fetch from "../components/MusicLibrary";

export const database = firebase.firestore();

export const addDocument = async (state) => {
  database.collection("fav-songs").add({
    song: state.song,
    artist: state.artist,
    genre: state.genre,
    rating: document.querySelector("#dropdown-song-rating").value,
  });
  fetch();
};

export const deleteDocument = async (id) => {
  database.collection("fav-songs").doc(id).delete();
  fetch();
};
