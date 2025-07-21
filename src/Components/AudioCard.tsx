import React, { useState } from 'react';
import Waveform from './Waveform';

const AudioCard = ({ audio }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-4 bg-white rounded shadow hover:shadow-lg transition relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-lg font-semibold">{audio.title}</h3>
      <p className="text-sm text-gray-500 mb-2">{audio.language}</p>

      {isHovered ? (
        <Waveform audioUrl={audio.url} />
      ) : (
        <audio controls className="w-full mt-2">
          <source src={audio.url} type="audio/wav" />
          Your browser does not support audio.
        </audio>
      )}

      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <a href={audio.url} download className="hover:text-blue-600">⬇ Download</a>
        <button className="hover:text-red-500">🗑 Delete</button>
      </div>
    </div>
  );
};

export default AudioCard;

