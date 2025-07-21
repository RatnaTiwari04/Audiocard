import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const Waveform = ({ audioUrl }) => {
  const waveformRef = useRef(null);
  const waveSurferRef = useRef(null);

  useEffect(() => {
    waveSurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#d1d5db',
      progressColor: '#ef4444',
      height: 80,
      barWidth: 2,
    });

    waveSurferRef.current.load(audioUrl);

    return () => waveSurferRef.current.destroy();
  }, [audioUrl]);

  return <div ref={waveformRef}></div>;
};

export default Waveform;
