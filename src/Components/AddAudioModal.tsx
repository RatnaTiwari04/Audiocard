import React, { useState } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';

const AddAudioModal = ({ isOpen, onClose, onAddAudio }) => {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    if (title && language && file) {
      const url = URL.createObjectURL(file);
      onAddAudio({ id: uuidv4(), title, language, file, url });
      setTitle('');
      setLanguage('');
      setFile(null);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal" overlayClassName="overlay">
      <div className="p-6 bg-white rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Audio</h2>
        <input
          type="text"
          placeholder="Audio Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="file"
          accept=".mp3,.wav"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full mb-4"
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-red-500 text-white rounded">Add Audio</button>
        </div>
      </div>
    </Modal>
  );
};

export default AddAudioModal;
