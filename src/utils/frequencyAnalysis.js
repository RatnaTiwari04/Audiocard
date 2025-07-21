// Frequency analysis utilities

export const analyzeFrequency = (audioBuffer, audioContext) => {
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 256;
  
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  
  return {
    analyser,
    dataArray,
    bufferLength,
    getFrequencyData: () => {
      analyser.getByteFrequencyData(dataArray);
      return Array.from(dataArray);
    }
  };
};

export const normalizeFrequencyData = (frequencies, maxBars = 50) => {
  return frequencies
    .slice(0, maxBars)
    .map(freq => (freq / 255) * 100);
};

export const generateMockFrequencyData = (bars = 50) => {
  return Array.from({ length: bars }, (_, index) => {
    // Create more realistic frequency distribution
    const bassFreq = Math.random() * 60 + 20; // Low frequencies
    const midFreq = Math.random() * 40 + 10;  // Mid frequencies
    const highFreq = Math.random() * 20 + 5;  // High frequencies
    
    if (index < bars * 0.3) return bassFreq;
    if (index < bars * 0.7) return midFreq;
    return highFreq;
  });
};

export const smoothFrequencyData = (data, smoothingFactor = 0.8) => {
  const smoothed = [];
  let lastValue = 0;
  
  for (let i = 0; i < data.length; i++) {
    const smoothedValue = lastValue * smoothingFactor + data[i] * (1 - smoothingFactor);
    smoothed.push(smoothedValue);
    lastValue = smoothedValue;
  }
  
  return smoothed;
};

export const getFrequencyPeaks = (frequencies) => {
  const peaks = [];
  
  for (let i = 1; i < frequencies.length - 1; i++) {
    if (frequencies[i] > frequencies[i - 1] && frequencies[i] > frequencies[i + 1]) {
      peaks.push({ index: i, value: frequencies[i] });
    }
  }
  
  return peaks.sort((a, b) => b.value - a.value);
};

export const animateFrequencyBars = (data, callback, duration = 1000) => {
  const startTime = Date.now();
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const animatedData = data.map(value => value * progress);
    callback(animatedData);
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  animate();
};