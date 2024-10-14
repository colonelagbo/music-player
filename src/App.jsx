import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import MusicPlayer from './components/MusicPlayer';
import { searchTracks } from './api/deezerApi';

function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleSearch = async (query) => {
    try {
      const results = await searchTracks(query);
      setTracks(results);
    } catch (error) {
      console.error('Error searching tracks:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Music Player</h1>
        <SearchBar onSearch={handleSearch} />
        <TrackList tracks={tracks} onTrackSelect={setCurrentTrack} />
        {currentTrack && <MusicPlayer track={currentTrack} />}
      </div>
    </div>
  );
}

export default App;