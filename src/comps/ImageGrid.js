import React from 'react';
import useFirestore from '../hooks/useFirestoes';

const ImageGrid = ({ setSelectedImg }) => {
  // Get document images to show
  const { docs } = useFirestore('images');
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="uploaded pic" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
