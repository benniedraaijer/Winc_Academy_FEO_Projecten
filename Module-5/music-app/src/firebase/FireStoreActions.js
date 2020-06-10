import firebase from "../firebase/config/FireBaseConfig";
let db = [];


export const database = async () => {
await getData()


return db

}





 const getData = async () => {
  
  const FireStore = await firebase
    .firestore()
    .collection("fav-songs")
    .orderBy("song")
    .get();

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

//database()





//const database = firebase.firestore();
//const database = firebase.firestore();

//FireStore();

export const addDocument = async (state) => {
  await firebase
    .firestore()
    .collection("fav-songs")
    .add({
      song: state.song,
      artist: state.artist,
      genre: state.genre,
      rating: document.querySelector("#dropdown-song-rating").value,
    });
};

export const deleteDocument = async (id) => {
  await firebase.firestore().collection("fav-songs").doc(id).delete();
};
