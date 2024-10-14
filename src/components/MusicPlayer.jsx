import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

function MusicPlayer({ track }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    setIsPlaying(false);
  }, [track]);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center">
          <img src={track.album.cover_small} alt={track.title} className="w-16 h-16 mr-4" />
          <div>
            <h3 className="font-semibold">{track.title}</h3>
            <p className="text-gray-600">{track.artist.name}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <SkipBack size={24} />
          </button>
          <button onClick={togglePlayPause} className="text-gray-600 hover:text-gray-800">
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <SkipForward size={24} />
          </button>
          <div className="flex items-center">
            <Volume2 size={24} className="text-gray-600 mr-2" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24"
            />
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={track.preview} />
    </div>
  );
}

export default MusicPlayer;