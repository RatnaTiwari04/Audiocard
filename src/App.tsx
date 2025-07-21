import React, { useState } from 'react';
import AddAudioModal from './components/AddAudioModal';
import AudioCard from './components/AudioCard';
import './index.css';

const App = () => {
  const [audios, setAudios] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddAudio = (audioData) => {
    setAudios((prev) => [...prev, audioData]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Audio Library</h1>
      <button
        onClick={() => setShowModal(true)}
        className="mb-6 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        + Add Audio
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {audios.map((audio) => (
          <AudioCard key={audio.id} audio={audio} />
        ))}
      </div>

      <AddAudioModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddAudio={handleAddAudio}
      />
    </div>
  );
};

export default App;
