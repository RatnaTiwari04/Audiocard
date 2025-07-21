// Audio utility functions

export const formatDuration = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const getAudioDuration = (file) => {
  return new Promise((resolve) => {
    const audio = new Audio();
    audio.onloadedmetadata = () => {
      resolve(audio.duration);
    };
    audio.src = URL.createObjectURL(file);
  });
};

export const validateAudioFile = (file) => {
  const allowedTypes = ['audio/mp3', 'audio/wav', 'audio/mpeg'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Invalid file type. Only MP3 and WAV files are allowed.' };
  }

  if (file.size > maxSize) {
    return { valid: false, error: 'File size must be less than 5MB.' };
  }

  return { valid: true };
};

export const generateAudioId = () => {
  return Date.now() + Math.random().toString(36).substr(2, 9);
};

export const getRandomColor = () => {
  const colors = [
    'bg-orange-200',
    'bg-green-200',
    'bg-purple-200',
    'bg-blue-200',
    'bg-pink-200',
    'bg-yellow-200',
    'bg-red-200',
    'bg-indigo-200',
    'bg-teal-200',
    'bg-cyan-200'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const formatDate = (date) => {
  return date.toLocaleDateString('en-GB', { 
    day: 'numeric', 
    month: 'short' 
  });
};

export const getSampleAudioData = () => {
  return [
    {
      id: 1,
      title: 'Offer Credits',
      language: 'Hindi',
      duration: '00:00:43',
      date: '25th May',
      color: 'bg-orange-200'
    },
    {
      id: 2,
      title: 'Diwali Banaza',
      language: 'English',
      duration: '00:00:12',
      date: '1st May',
      color: 'bg-green-200'
    },
    {
      id: 3,
      title: 'Opening Discount',
      language: 'Hindi',
      duration: '00:00:12',
      date: '28th Apr',
      color: 'bg-purple-200'
    },
    {
      id: 4,
      title: 'Welcome Bonus',
      language: 'Hindi',
      duration: '00:00:12',
      date: '02th Feb',
      color: 'bg-blue-200'
    },
    {
      id: 5,
      title: 'New 50',
      language: 'English',
      duration: '00:00:12',
      date: '25th May',
      color: 'bg-pink-200'
    },
    {
      id: 6,
      title: 'Summer Saving',
      language: 'English',
      duration: '00:00:12',
      date: '25th May',
      color: 'bg-yellow-200'
    },
    {
      id: 7,
      title: 'Back to School Discount',
      language: 'Hindi',
      duration: '00:00:12',
      date: '25th May',
      color: 'bg-green-200'
    },
    {
      id: 8,
      title: 'COVID Awareness',
      language: 'Hindi',
      duration: '00:00:12',
      date: '25th May',
      color: 'bg-gray-200'
    }
  ];
};