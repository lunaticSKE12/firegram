import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  // prop from Uploadform
  const { url, progress } = useStorage(file);

  // Reset progress bar by url uploaded
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return <div className="progress-bar" style={{ width: progress + '%' }}></div>;
};

export default ProgressBar;
