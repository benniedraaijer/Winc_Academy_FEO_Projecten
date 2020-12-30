import React from "react";
import firebase from "../firebase/config/FireBaseConfig";

export default function MusicGenres() {
  const [rock, setRock] = React.useState([]);
  const [country, setCountry] = React.useState([]);
  const [pop, setPop] = React.useState([]);
  const [nl, setNL] = React.useState([]);
  const [hiphop, setHiphop] = React.useState([]);
  const [soul, setSoul] = React.useState([]);
  const [jazz, setJazz] = React.useState([]);
  const [blues, setBlues] = React.useState([]);
  const [metal, setMetal] = React.useState([]);
  const [punk, setPunk] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const database = firebase.firestore();

      const rock = await database
        .collection("fav-songs")
        .where("genre", "==", "Rock")
        .get();
      const country = await database
        .collection("fav-songs")
        .where("genre", "==", "Country")
        .get();
      const pop = await database
        .collection("fav-songs")
        .where("genre", "==", "Pop")
        .get();
      const nl = await database
        .collection("fav-songs")
        .where("genre", "==", "Nl")
        .get();
      const hiphop = await database
        .collection("fav-songs")
        .where("genre", "==", "Hip Hop")
        .get();
      const soul = await database
        .collection("fav-songs")
        .where("genre", "==", "Soul")
        .get();
      const jazz = await database
        .collection("fav-songs")
        .where("genre", "==", "Jazz")
        .get();
      const blues = await database
        .collection("fav-songs")
        .where("genre", "==", "Blues")
        .get();
      const metal = await database
        .collection("fav-songs")
        .where("genre", "==", "Metal")
        .get();
      const punk = await database
        .collection("fav-songs")
        .where("genre", "==", "Punk")
        .get();

      setRock(rock.docs.map(doc => doc.data()));
      setCountry(country.docs.map(doc => doc.data()));
      setPop(pop.docs.map(doc => doc.data()));
      setNL(nl.docs.map(doc => doc.data()));
      setHiphop(hiphop.docs.map(doc => doc.data()));
      setSoul(soul.docs.map(doc => doc.data()));
      setJazz(jazz.docs.map(doc => doc.data()));
      setBlues(blues.docs.map(doc => doc.data()));
      setMetal(metal.docs.map(doc => doc.data()));
      setPunk(punk.docs.map(doc => doc.data()));
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='app-titles'>
        <h2>Most Populair Genres</h2>
      </div>
      <div id='genre-container'>
        <div className='genre-box' id='Rock'>
          Rock
          {rock.map(song => (
            <div
              className='genre-row'
              id={song.id}
              key={song.song + new Date()}>
              <p className='song-title'>{song.song + " - " + song.artist}</p>
            </div>
          ))}
        </div>
        <div className='genre-box' id='Country'>
          Country
          {country.map(song => (
            <div
              className='genre-row'
              id={song.id}
              key={song.song + new Date()}>
              <p className='song-title'>{song.song + " - " + song.artist}</p>
            </div>
          ))}
        </div>
        <div className='genre-box' id='Pop'>
          Pop
          {pop.map(song => (
            <div
              className='genre-row'
              id={song.id}
              key={song.song + new Date()}>
              <p className='song-title'>{song.song + " - " + song.artist}</p>
            </div>
          ))}
        </div>
        <div className='genre-box' id='NL'>
          Nederlands
          {nl.map(song => (
            <div
              className='genre-row'
              id={song.id}
              key={song.song + new Date()}>
              <p className='song-title'>{song.song + " - " + song.artist}</p>
            </div>
          ))}
        </div>
        <div className='genre-box' id='genre-5'>
          Hip Hop
          {hiphop.map(song => (
            <div
              className='genre-row'
              id={song.id}
              key={song.song + new Date()}>
              <p className='song-title'>{song.song + " - " + song.artist}</p>
            </div>
          ))}
        </div>
        <div className='genre-box' id='genre-6'>
          Soul
          {soul.map(song => (
            <div
              className='genre-row'
              id={song.id}
              key={song.song + new Date()}>
              <p className='song-title'>{song.song + " - " + song.artist}</p>
            </div>
          ))}
        </div>
        <div className='genre-box' id='genre-7'>
          Jazz
          {jazz.map(song => (
            <div
              className='genre-row'
              id={song.id}
              key={song.song + new Date()}>
              <p className='song-title'>{song.song + " - " + song.artist}</p>
            </div>
          ))}
        </div>
        <div className='genre-box' id='genre-8'>
          Blues
          {blues.map(song => (
            <div
              className='genre-row'
              id={song.id}
              key={song.song + new Date()}>
              <p className='song-title'>{song.song + " - " + song.artist}</p>
            </div>
          ))}
        </div>
        <div className='genre-box' id='genre-9'>
          Metal
          {metal.map(song => (
            <div
              className='genre-row'
              id={song.id}
              key={song.song + new Date()}>
              <p className='song-title'>{song.song + " - " + song.artist}</p>
            </div>
          ))}
        </div>
        <div className='genre-box' id='genre-10'>
          Punk
          {punk.map(song => (
            <div
              className='genre-row'
              id={song.id}
              key={song.song + new Date()}>
              <p className='song-title'>{song.song + " - " + song.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
