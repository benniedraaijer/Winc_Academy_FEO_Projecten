import React from 'react';
import firebase from '../firebase/config/FireBaseConfig';
//import { MusicContext } from "../contexts/MusicContext";
import { callingMusicProvider } from '../contexts/MusicContext';
let db = [];

////// Get Data From FireBase - Firestore //////
export const database = async () => {
  await getData();
  return db;
};

const getData = async () => {
  const FireStore = await firebase.firestore().collection('fav-songs').orderBy('song').get();

  FireStore.forEach((item) => {
    db.push({
      artist: item.data().artist,
      song: item.data().song,
      genre: item.data().genre,
      rating: item.data().rating,
      id: item.id,
    });
  });
};

////// Add Data To FireBase - Firestore //////
export const addDocument = async (state) => {
  await firebase
    .firestore()
    .collection('fav-songs')
    .add({
      song: state.song,
      artist: state.artist,
      genre: state.genre,
      rating: document.querySelector('#dropdown-song-rating').value,
    });
};

////// Delete Data From FireBase - Firestore //////
export const deleteDocument = async (id) => {
  await firebase.firestore().collection('fav-songs').doc(id).delete();
};
