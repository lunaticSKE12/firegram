import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  // Set state selected file and error
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // Type of file
  const types = ['image/png', 'image/jpeg'];

  // Handler selected file
  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
