import React from 'react';
import './css/App.css';
import { MusicProvider } from './contexts/MusicContext';
import { MusicLibrary } from './components/MusicLibrary';
import SongInput from './components/SongInput';
import MusicGenres from './components/MusicGenres.js';

export default function App() {
  return (
    <MusicProvider>
      <SongInput />
      <MusicGenres />
      <MusicLibrary />
    </MusicProvider>
  );
}
