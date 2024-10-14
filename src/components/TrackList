import React from 'react';

function TrackList({ tracks, onTrackSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {tracks.map((track) => (
        <div
          key={track.id}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => onTrackSelect(track)}
        >
          <img src={track.album.cover_medium} alt={track.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1 truncate">{track.title}</h3>
            <p className="text-gray-600 truncate">{track.artist.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrackList;