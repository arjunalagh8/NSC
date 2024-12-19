import React, { useState } from 'react';

const Teams = ({ images }) => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = Math.ceil(images.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPageCount ? prevPage + 1 : prevPage));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleImages = images.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          marginRight: '10px',
          color: currentPage === 1 ? '#ccc' : '#333',
          padding: '8px',
          transition: 'color 0.3s',
        }}
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {visibleImages.map((image, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px', position: 'relative' }}>
            <img
              src={image}
              alt={`Team Member ${index + 1}`}
              style={{ width: '250px', height: 'auto', borderRadius: '8px', cursor: 'pointer' }}
            />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'none', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.3s', borderRadius: '8px', padding: '10px', color: 'white' }}>
              <p style={{ margin: 0, textAlign: 'center' }}>Description {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          marginLeft: '10px',
          color: currentPage === totalPageCount ? '#ccc' : '#333',
          padding: '8px',
          transition: 'color 0.3s',
        }}
        onClick={handleNext}
        disabled={currentPage === totalPageCount}
      >
        &gt;
      </button>
    </div>
  );
};

export default Teams;





